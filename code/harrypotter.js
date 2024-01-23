function hp1Rating(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var rating = data[8876]["average_rating"];
        console.log(rating)
    })
}

function hp2Rating(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var rating = data[2]["average_rating"];
        console.log(rating)
    })
}

function hp3Rating(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var rating = data[3]["average_rating"];
        console.log(rating)
    })
}

function hp4Rating(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var rating = data[10679]["average_rating"];
        console.log(rating)
    })
}

function hp5Rating(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var rating = data[1]["average_rating"];
        console.log(rating)
    })
}

function hp6Rating(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var rating = data[0]["average_rating"];
        console.log(rating)
    })
}

function hp7Rating(csvFilePath){
    d3.csv(csvFilePath).then(data => {
        var rating = data[11127]["average_rating"];
        console.log(rating)
    })
}

hp1Rating("books.csv")
hp2Rating("books.csv")
hp3Rating("books.csv")
hp4Rating("books.csv")
hp5Rating("books.csv")
hp6Rating("books.csv")
hp7Rating("books.csv")
