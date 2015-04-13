      var assert = require("assert");

  describe("Find data in file", function(filepath){

      it('should return all products as they are in the csv file', function(done){
          var Products = require("./popular_products");
          var products = new Products('./Nelisa Sales History.csv');
          products.productNames(function(err, product){
          assert.equal(449, product.length);
          assert.equal("Imasi", product[2].itemName);
          done();
          });
           
      });

       it('should return grouped items', function(){
          var Products = require("./popular_products");
          var products = new Products('./Nelisa Sales History.csv');
          var groupedProducts = products.groupedItems();
          console.log(groupedProducts);
          assert.equal(125, groupedProducts["Imasi"]);
         
      });

       it('should return mostPopular item', function(){
          var Products = require("./popular_products");
          var products = new Products('./Nelisa Sales History.csv');
          var productMap = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14
      };

          var popularProduct = products.mostPopular(productMap);
          console.log("Most popular product with total number of sales:");
          console.log("===============================================");
          for(key in popularProduct){
              console.log(key + "=>" + popularProduct[key]);    
          }
          assert.equal('Mixed Sweets 5s', popularProduct["Product"]);
          assert.equal(172, popularProduct["Amount"]);
      });
});

/*
var assert = require("assert");
var assert = require("../Nelisa Sales History. csv");

 describe("find the most popular product", function(){
     //creat a function that reads the file and returns a list of objects

 it('should return a list of product objects', function(){

var products = new products();
var list = products.readProductsFromFile('Nelisa Sales History. csv');

 assert.equal(449,list.length);
 assert.equal("Imasi",list[2].itemName);
 assert.equal(1,list[2].soldItem);

 //console.log(list);

var groupedProducts = products.groupByItemsSold(list)
 //console.log(groupedProducts);

 });
 })



var assert = require("assert");

var Products = require(filepath);

describe("Find the most popular product", function(){

    //create a function that reads the file and returns a list of ojbects

    it('should return a list of product objects', function(){
        
        var products = new Products("./Nelisa Sales History.csv");
        var list = products.readProductsFromFile('./Nelisa Sales History.csv');
        
        assert.equal(449, list.length);
        assert.equal("Imasi", list[2].itemName);
        assert.equal(1, list[2].soldItems);

        //console.log(list);

        //var groupedProducts = products.groupByItemsSold(list);    
        //console.log(groupedProducts);

    });


    it('should return itemMap', function(){

        var products = new Products('../Nelisa Sales History.csv');
        //create a function that takes a list of objects and sum the number of sold items
        
        var listOfProducts = [
            {itemName: 'Bread', soldItems:20},
            {itemName: 'Milk 1l', soldItems: 102},
            {itemName: 'Imasi', soldItems: 100},
            {itemName: 'Bread', soldItems: 50},
            {itemName: 'Milk 1l', soldItems: 40},
            {itemName: 'Imasi', soldItems: 25},
            {itemName: 'Bread', soldItems: 60}
            ];

        var expectedMap = {'Milk 1l': 142, 'Imasi': 125, 'Bread': 130};

        var productMap = products.groupByItemsSold(listOfProducts);

        assert.deepEqual(expectedMap, productMap);

    });

    it('should return the most popular product', function(){

        var products = new Products();
        
        // ?????    
        var lists = {
          'Milk 1l': 142,
          'Imasi': 125,
          'Bread': 130,
          'Chakalaka Can': 94,
          'Gold Dish Vegetable Curry Can': 86,
          'Fanta 500ml': 94,
          'Coke 500ml': 159,
          'Cream Soda 500ml': 75,
          'Iwisa Pap 5kg': 47,
          'Top Class Soy Mince': 98,
          'Shampoo 1 litre': 26,
          'Soap Bar': 50,
          'Bananas - loose': 114,
          'Apples - loose': 114,
          'Mixed Sweets 5s': 172,
          'Heart Chocolates': 20,
          'Rose (plastic)': 14,
          'Valentine Cards': 14 }


           var result ={name: 'Mixed Sweets 5s', amt:172}; //
           var productsResults = products.mostPopularPrd(lists);

            assert.deepEqual(result, productsResults);
    });
    */
