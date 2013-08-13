/*
  Mappings

  Mappings are matchers that we use to determine if we should execute a
  bit of Tritium during an execution. Aka, run something when we are
  are on a certain page.

  Example starting code:
*/

match($path) {
  with(/^\/$|^\/\?/) {
    log("--> Importing pages/home.ts in mappings.ts")
    @import "pages/home.ts"
  }

  with(/catalog/) {
    log("--> Importing pages/catalog catalog.ts in mappings.ts")
    @import "pages/catalog.ts"
  }

  with(/category/) {
    log("--> Importing pages/catalog catalog.ts in mappings.ts")
    @import "pages/catalog.ts"
  }

  

  with(/content/) {
    log("--> Importing pages/content content.ts in mappings.ts")
    @import "pages/content.ts"
  }

  

  # with(/INSERT URL MATCHER/) {
  #   log("--> Importing pages/INSERT PAGETYPE.ts in mappings.ts")
  #   @import pages/INSERT PAGETYPE.ts
  # }

  # with(/INSERT URL MATCHER/) {
  #   log("--> Importing pages/pagetype.ts in mappings.ts")
  #   @import pages/pagetype.ts
  # }

  # Example:
  # with(/product/) {
  #   log("--> Importing pages/product.ts in mappings.ts")
  #   @import pages/product.ts
  # }

  else() {
    log("--> No page match in mappings.ts")
  }
}

