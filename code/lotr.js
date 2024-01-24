/**function that reads csv file, then creates a bar chart*/
function hpRatings(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        /**sets variables to a certain piece of data in the csv, then makes it a list*/
        var rating1 = data[23]["average_rating"],
            rating2 = data[4255]["average_rating"],
            rating3 = data[4256]["average_rating"];
        var ratinglist = [];
        ratinglist.push(rating1, rating2, rating3);
        console.log(ratinglist);
        /**creates bar chart*/
        var svg = d3.select("svg"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin,
            xScale = d3.scaleBand().range([0, width]).padding(0.5),
            yScale = d3.scaleLinear().range([height, 0]);
            xScale = d3.scaleBand().range([0, width]).padding(0.5),
            yScale = d3.scaleLinear().range([height, 0]);
        /**sets the scale of the chart axis*/
        xScale.domain(["Book 1", "Book 2", "Book 3"]);
        yScale.domain([0, 5]);
        var g = svg.append("g")
        .attr("transform", "translate(" + 100 + "," + 100 + ")");
        /**labels the axis*/
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

        /**makes the bars*/
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
/**generates the bar chart*/
hpRatings("books.csv")

/**function that displays a message when a certain option of the dropdown list is selected*/
function message(csvFilePath){
    /**reads csv file then sets variables to corrensponding data in the csv file*/
    d3.csv(csvFilePath).then(data => {
        var name1 = data[23]["title"],
            name2 = data[4255]["title"],
            name3 = data[4256]["title"],
            authors1 = data[23]["authors"],
            authors2 = data[4255]["authors"],
            authors3 = data[4256]["authors"],
            pages1 = data[23]["  num_pages"],
            pages2 = data[4255]["  num_pages"],
            pages3 = data[4256]["  num_pages"];

        /**checks which value of the dropdown menu is selected by the user via DOM*/
        const selectedOption = document.getElementById("dropdown").value;
        /**sets object (container) in which we are going to put our text*/
        const container = document.getElementById("container");
        /**control statement(switch) that will display certian text based on the selected value in the dropdown menu*/
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
        }
 })

}