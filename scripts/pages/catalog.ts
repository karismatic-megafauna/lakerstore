$("/html/body") { 
  $$("[data-role='content']") {
    move_here("//div[@id='full']//div[@id='container']//table[@id='mainarea']//td[@id='shopcontent']")
    move_here("//div[@id='full']//div[@id='container']//div[@id='bottommenu']")
    $("//div[@id='bottommenu']") {
      insert("div", data-role:"collapsible-set"){
        move_here("//div[@id='bottom_col1']//div[@id='block-menu-menu-help-menu']"){
          attribute("data-role", "collapsible")
          add_class("_collapsible")
        }
        move_here("//div[@id='bottom_col2']//div[@id='block-menu-menu-other-sites1']"){
          attribute("data-role", "collapsible")
          add_class("_collapsible")
        }
        move_here("//div[@id='bottom_col3']//div[@id='block-menu-menu-other-sites2']"){
          attribute("data-role", "collapsible")
          add_class("_collapsible")
        }
      }
    }
  } 

  remove("./div[not(@data-role)]")

}

   