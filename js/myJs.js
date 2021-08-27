var productName = document.getElementById('productName');
var productDesc = document.getElementById('productDesc');
var productBrand = document.getElementById('productBrand');
var productPrice = document.getElementById('productPrice');
var productBtn = document.getElementById('productBtn');
var productQuantity = document.getElementById('productQuantity');
var productSelect= document.getElementById('productSelect');
var formControl = document.getElementsByClassName('form-control');
var myClose = document.getElementsByClassName('myClose');
var mySearchInp = document.getElementById('mySearchInp');
var productHeadline = document.getElementById('productHeadline');
var successProductAlert = document.getElementById('successProductAlert');
var dataRow = document.getElementById('dataRow');
var productContainer;
var currentIndex = 0;
productContainer = [{"productBrand": "Bharat Petrolium",
                    "productDesc": "Gas can filled with petrol. This gas can have 5L of petrol and it is very handy to carry. ",
                    "productName": "Petrol can",
                    "productPrice": "500",
                    "productQuantity": "5",
                    "productSelect": "In stock"},
                    {"productBrand": "Tata",
                    "productDesc": "Petroleum solvents are made up of liquid hydrocarbon derived from petroleum and petroleum by-products, used either for various commercial products or in laboratories for research purposes. ",
                    "productName": "Liquid",
                    "productPrice": "50",
                    "productQuantity": "500",
                    "productSelect": "In stock"},
                    {"productBrand": "Good year",
                    "productDesc": "Best Quality Tires of goodyear company comes with extended warrenty.",
                    "productName": "Wagan",
                    "productPrice": "2500",
                    "productQuantity": "64",
                    "productSelect": "In stock"},
                ];
showProducts();

productBtn.addEventListener('click', function () {
    if (productBtn.innerHTML == 'add product') {
        if(!(productName.value == '' || productDesc.value == '' || productBrand.value == '' || productPrice.value == '' || productQuantity.value=='')){
            addProducts();
            showAlert();
            showProducts();
            emptyFields();
        }
    } else {
        saveUpdate();
        emptyFields();
    }

});

function showAlert() {
    $(successProductAlert).fadeIn(500, function () {
        $(successProductAlert).fadeOut(2000);
    });
}

function addProducts() {
    var products = {
        productName: productName.value,
        productDesc: productDesc.value,
        productBrand: productBrand.value,
        productPrice: productPrice.value,
        productQuantity: productQuantity.value,
        productSelect:productSelect.value
    };
    productContainer.push(products);
}

function showProducts() {

    var rows = '';
    for (var i = 0; i < productContainer.length; i++) {
        rows += '<div class="col-lg-4 col-md-6 col-sm-12 my-2 products"><div class="product"><div class="card p-1 text-center m-auto" style="width: 18rem;"><div class="d-flex justify-content-between"><i class="fas fa-edit fa-2x" onclick="updateProduct(' + i + ')"></i><i class="fa fa-times-circle fa-2x " onclick="deleteItem(' + i + ')"></i></div><img class="img-fluid"  onclick="displayModal(' + i + ') "src="images/gascan.jpg" class="card-img-top" alt="test"><div class="card-body"><h5 class="card-title">' + productContainer[i].productName + '</h5><p class="card-text">' + productContainer[i].productSelect + '</p><a href="#" class="btn btn-primary">Rs. ' + productContainer[i].productPrice + '</a></div></div></div></div>';
    }
    document.getElementById('dataRow').innerHTML = rows;
    productHeadline.style.display = 'block';
    searchItem.style.display = 'block';
}

function displayModal(index){
    data=productContainer[index];
    let modalData=
    `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">`+ data.productName+`</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            <div class="modal-body">
            <div class="col-lg-4 col-md-6 col-sm-12 mx-5 products align-items-center">
                <div class="product">
                    <div class="card p-1 text-center m-auto" style="width: 18rem;">
                        <div class="d-flex justify-content-between">
                        </div>
                        <img class="img-fluid"  src="images/gascan.jpg" class="card-img-top" alt="test">
                        <div class="card-body">
                            <h5 class="card-title">` + data.productName + `</h5><p class="card-text">` + data.productDesc + `</p><p class="card-text">` + data.productSelect + `</p><p class="card-text">` + data.productQuantity + `</p><a href="#" class="btn btn-primary"> Rs. ` + data.productPrice + `</a>
                        </div>
                    </div>
                </div>
            </div>'
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;
  document.getElementById("modalDiv").innerHTML=modalData;
  $("#exampleModal").modal('show');
}

function updateProduct(index) {
    productName.value = productContainer[index].productName;
    productDesc.value = productContainer[index].productDesc;
    productPrice.value = productContainer[index].productPrice;
    productBrand.value= productContainer[index].productPrice;
    productSelect.value= productContainer[index].productSelect;
    productQuantity.value= productContainer[index].productQuantity;
    productBtn.innerHTML = 'update product';
    currentIndex = index;
}

function saveUpdate() {
    var products = {
        productName: productName.value,
        productDesc: productDesc.value,
        productBrand: productBrand.value,
        productPrice: productPrice.value,
        productSelect: productSelect.value,
        productQuantity: productQuantity.value
    };
    productContainer[currentIndex] = products;
    showProducts();
    productBtn.innerHTML = 'add product';
}

function emptyFields() {
    for (var i = 0; i < formControl.length; i++) {
        formControl[i].value = '';
    }
}

function deleteItem(item) {
    productContainer.splice(item, 1);
    showProducts();
}
mySearchInp.addEventListener('keyup', function (e) {
    var rows = '';
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].productName.toLowerCase().includes(e.target.value.toLowerCase())) {
            rows += '<div class="col-lg-4 col-md-6 col-sm-12 my-2 products"><div class="product"><div class="card p-1 text-center m-auto" style="width: 18rem;"><div class="d-flex justify-content-between"><i class="fas fa-edit fa-2x" onclick="updateProduct(' + i + ')"></i><i class="fa fa-times-circle fa-2x" onclick="deleteItem(' + i + ')"></i></div><img class="img-fluid" src="images/gascan.jpg" class="card-img-top" alt="test"><div class="card-body"><h5 class="card-title">' + productContainer[i].productName + '</h5><p class="card-text">' + productContainer[i].productDesc + '</p><a href="#" class="btn btn-primary">' + productContainer[i].productPrice + '</a></div></div></div></div>';
        }
    }
    document.getElementById('dataRow').innerHTML = rows;
});


//nav bar scroll
let navHeight = $('nav').outerHeight();
$(window).scroll(function () {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > navHeight) {
        document.querySelector('nav').style.position = 'fixed';
        document.querySelector('nav').style.zIndex = '1000';
        document.querySelector('.my-Container').style.width = '85%';
        document.querySelector('nav').style.width = '85%';
        document.querySelector('.marginTop').style.marginTop = '0rem';
    } else {
        document.querySelector('nav').style.position = 'relative';
        document.querySelector('.my-Container').style.width = '85%';
        document.querySelector('nav').style.width = '100%';
        document.querySelector('.marginTop').style.marginTop = '3rem';
    }
});