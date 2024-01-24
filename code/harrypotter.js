function hpRatings(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var rating1 = data[8876]["average_rating"],
            rating2 = data[2]["average_rating"],
            rating3 = data[3]["average_rating"],
            rating4 = data[10679]["average_rating"],
            rating5 = data[1]["average_rating"],
            rating6 = data[0]["average_rating"],
            rating7 = data[11127]["average_rating"];
        var ratinglist = [];
        ratinglist.push(rating1, rating2, rating3, rating4, rating5, rating6, rating7);
        console.log(ratinglist);
        var svg = d3.select("svg"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin,
            xScale = d3.scaleBand().range([0, width]).padding(0.5),
            yScale = d3.scaleLinear().range([height, 0]);
            xScale = d3.scaleBand().range([0, width]).padding(0.5),
            yScale = d3.scaleLinear().range([height, 0]);
        xScale.domain(["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6", "Book 7"]);
        yScale.domain([0, 5]);
        var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");
        
        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale).tickFormat(function(d){
           return d;
         })
         );

        g.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){
             return d + " Stars";
         }).ticks(4));


        g.selectAll(".bar")
         .data(ratinglist)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(_, i) { return xScale("Book " + (i + 1)); })
         .attr("y", function(d) { return yScale(d); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return height - yScale(d); });
 })

}

hpRatings("books.csv")

function message(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var name1 = data[8876]["title"],
            name2 = data[2]["title"],
            name3 = data[3]["title"],
            name4 = data[10679]["title"],
            name5 = data[1]["title"],
            name6 = data[0]["title"],
            name7 = data[11127]["title"],
            authors1 = data[8876]["authors"],
            authors2 = data[2]["authors"],
            authors3 = data[3]["authors"],
            authors4 = data[10679]["authors"],
            authors5 = data[1]["authors"],
            authors6 = data[0]["authors"],
            authors7 = data[11127]["authors"],
            pages1 = data[8876]["  num_pages"],
            pages2 = data[2]["  num_pages"],
            pages3 = data[3]["  num_pages"],
            pages4 = data[10679]["  num_pages"],
            pages5 = data[1]["  num_pages"],
            pages6 = data[0]["  num_pages"],
            pages7 = data[11127]["  num_pages"];

        const selectedOption = document.getElementById("dropdown").value;
        const container = document.getElementById("container");
        switch(selectedOption){
            case "none":
                container.innerHTML = "";
                break;
            case "book1":
                container.innerHTML = "<p>Name: " + name1 +"</p><p>Author: " + authors1 +"</p><p>Pages: " + pages1 + "</p>"
                break;
            case "book2":
                container.innerHTML = "<p>Name: " + name2 +"</p><p>Author: " + authors2 +"</p><p>Pages: " + pages2 + "</p>"
                break;
            case "book3":
                container.innerHTML = "<p>Name: " + name3 +"</p><p>Author: " + authors3 +"</p><p>Pages: " + pages3 + "</p>"
                break;
            case "book4":
                container.innerHTML = "<p>Name: " + name4 +"</p><p>Author: " + authors4 +"</p><p>Pages: " + pages4 + "</p>"
                break;
            case "book5":
                container.innerHTML = "<p>Name: " + name5 +"</p><p>Author: " + authors5 +"</p><p>Pages: " + pages5 + "</p>"
                break;
            case "book6":
                container.innerHTML = "<p>Name: " + name6 +"</p><p>Author: " + authors6 +"</p><p>Pages: " + pages6 + "</p>"
                break;
            case "book7":
                container.innerHTML = "<p>Name: " + name7 +"</p><p>Author: " + authors7 +"</p><p>Pages: " + pages7 + "</p>"
                break;
        }
 })

}