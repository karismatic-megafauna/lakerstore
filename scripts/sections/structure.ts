$("/html/body") {
  insert_top("div", data-role:"page") {
    insert("div", data-role:"header", class:"wrap")
    insert("div", data-role:"content", class:"content_wrap")
    insert("div", data-role:"footer", class:"content_wrap")
  }
}