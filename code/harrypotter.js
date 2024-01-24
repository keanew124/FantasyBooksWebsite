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
