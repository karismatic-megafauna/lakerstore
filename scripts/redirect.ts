# JQM Redirect Handler
insert("html") {
  insert("head")
  insert("body") {
    insert("div", data-role:"page", id:"redirect") {
      insert("div", data-role:"content") {
        # 302 Imports
        clean_mobile_meta_tags()
        add_assets()
        @import "jqm.ts"

        # Check Scheme
        $cors = "true"
        inner() {
          $new_location = url($location) {
            match(scheme()) {
              with("https") {
                match($secure, "true") {
                  $cors = "false"
                }
              }
              else() {
                match($secure, "false") {
                  $cors = "false"
                }
              }
            }
            $new_host = host()
          }
        }
        
        # Check Domain
        match($new_host, $host) {
            $cors = "false"
        }

        # log location before rewrite
        log("302 Location before rewrite: " + $new_location)

        # rewrite new location
        $new_location {
          rewrite_link()
        }
        log("302 Location: " + $new_location)

        match($cors) {
          # Full page reload
          with("true") {
            insert("script", "window.location.href='"+$new_location+"';", type:"text/javascript")
          }
          # AJAX
          else() {
            # Need to change page either on document.ready() for full page reload or just once it's AJAXed in...
            insert("script", "$.mobile.changePage('"+$new_location+"', {reverse: false, changeHash: false});", type:"text/javascript")
            insert("script", "$(document).ready(function(){$.mobile.changePage('"+$new_location+"', {reverse: false, changeHash: false})});", type:"text/javascript")
          }
        }
      }
    }
  }
}