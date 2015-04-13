    var fs = require('fs');

    module.exports = function(filePath){
        this.productNames = function(callback) {
            var linesInFile = fs.readFileSync(filePath, "utf8"); 
            var lines= linesInFile.split('\r');
            var totalProducts =[];

            lines.forEach(function(storedLines){
                var product = storedLines.split(';');
                
                var currentItem = product[2];
                var productTotal = product[3];

                var productMap = {
                    itemName : currentItem,
                    soldItems : Number(productTotal)
                };
                totalProducts.push(productMap);
              });

            callback(null, totalProducts);
        };
        this.groupedItems = function(){
            var linesInFile =     fs.readFileSync(filePath, "utf8");
            var productLines = linesInFile.split('\r');
            var productCountMap = {};
            productLines.forEach(function(productLine){

                var splitLines = productLine.split(';');
                console.log(splitLines);

                var currentItem = splitLines[2];
                var numberSold =  splitLines[3];

                if(productCountMap[currentItem] === undefined)
                {
                        productCountMap[currentItem] = 0;
                }
                    productCountMap[currentItem] += Number(numberSold);
            });
            
            return productCountMap;
        };
        
        this.mostPopular = function(productCountMap){
            var mostPopularProduct = {};
            var max = 0;
            for(var prop in productCountMap) {
                var value = productCountMap[prop];
                if(value > max) {
                      max = value;
                    mostPopularProduct = {
                       Product : prop,
                       Amount  : max
                    }
                }
            }
             //console.log(itemMap);
              return mostPopularProduct ;
        };
};




/*
var fs = require("fs");

module.exports = function(){

        //read the files and creat a list of objects
        this.readProductsFromFile = function(filePath){

            var linesInfile = fs.readFileSync(filePath, "utf-8");
             //console.log("===>"+ fs.readSync("Nelisa Sales History.csv", "utf-8")

                 var rows = lineInfile.split("\n");

                 var listOfProducts =[],
                 rows.forEach(function(rows){
                     var columns = rows.split(",");
                       var currentItem = column[2], //this is the product Name.(eg)Milk
                       var numberSold = columns[3], //number of the product sold for the day on my list

                       var salesObj = {
                           itemName: columns[2],
                           soldItems: Number(columns[3])
                       };

                       listOfProducts.push(salesObj);
                   });

            return listOfProduct;
        }

    // takes a list of products and return total sold
    this.groupByItemsSold = function(products){
        
        var itemMap = {};

    // think about creating a list of objects from the csv
    products.forEach(function(product){
        var currentItem = product.itemName; // this is the product Name.(eg)Milk
        var numberSold = product.SoldItem; // number of the product sold for the day on my list

        if(itemMap[currentItem] === undefined){
            //listOfProducts.push(currentItem);
            itemMap[currentItem] = 0;

        }
        itemMap[currentItem] = itemMap[current] + Number(numberSold);

    });

    return itemMap;

        //creat a function that find the most popular, put it in a module and write a unit test for it

        //creat another function fot least popular
        //callbac(null, itemMap);
        //console.log(mostPopularProduct);

    };

    this.mostPopularProduct = function (itemMap){
        var mostPopularProduct = {};
        var max = 0; 
        for(var prop in itemMap){
            var value = itemMap[prop];
            if(itemMap[prop]> max){
                max = itemMap[prop];
                mostPopularProduct = {
                    name: prop,
                    amt: max
                };
            }
        }
        return mostPopularProduct;
    };
};
*/