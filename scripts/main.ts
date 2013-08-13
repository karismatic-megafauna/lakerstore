# The main file executed by Tritium. The start of all other files.
match($status) {

  with(/302/) {
    log("--> STATUS: 302")
    html("UTF-8") {
      log("--> Importing redirect.ts from main.ts.")
      inner("")
      @import "redirect.ts"
    }
  }

  with(/200/) {
    log("--> STATUS: 200")
    match($content_type) {
      with(/html/) {
        # Rewrite the xmlns nodes before the html parser clobbers them
        replace(/\<(\/?)(\w+)\:\w+\>/, "$2_mwns_")
        
        # Force UTF-8 encoding. If you'd like to auto-detect the encoding,
        # simply remove the "UTF-8" argument.  e.g. html(){ ... }
        html("UTF-8") {
          @import device_detection.ts
          
          @import "html.ts"
        }

        # Rewrite the xmlns nodes to restore them
        replace(/(\<(\/?)(\w+))_mwns_(\:\w+\>)/, "$1$4") 
      }
      # with(/javascript/) {
      #   @import "ajax.ts"
      # }
      else() {
        log(concat("Passing through ", $content_type, " unmodified"))
      }
    }
  }

  else() {
    # not 200 or 302 response status
    log("--> STATUS: " + $status + " assuming its an error code pages/error.ts")
    @import "pages/error.ts"
  }
}