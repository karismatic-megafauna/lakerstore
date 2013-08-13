# Header
$("/html/body") {
     
  $$(".wrap") {
    inject(read("../sections/header.html"))
    move_here("//div[@id='full']//div[@id='container']//div[@id='block-block-2']")    
  }

  $$("#search_bg") {
  	move_here("//div[@id='full']//div[@id='container']//div[@id='mainnav']//div[@id='block-search-0']//div[@class='content']//form[@id='search-block-form']") 
  }
  


}