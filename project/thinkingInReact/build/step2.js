// var ProductCategoryRow = React.createClass({
// 	render:function(){
// 		return (
// 			<tr><th colspan="2">{this.props.category}</th></tr>
// 			);
// 	}
// });

var ProductCategoryRow = React.createClass({displayName: "ProductCategoryRow",
    render: function() {
        return (React.createElement("tr", {className: "productCategoryRow"}, React.createElement("th", {colSpan: "2"}, this.props.category)));
    }
});

var ProductRow = React.createClass({displayName: "ProductRow",


	render:function  () {
		var name = this.props.product.stocked ? this.props.product.name : React.createElement("span", {style: {color:'red','fontSize':'20px'}}, this.props.product.name);
		return (

			React.createElement("tr", null, 
				React.createElement("td", null, name), 
				React.createElement("td", null, this.props.product.price)
			)

			);
	}

});

var ProductTable = React.createClass({displayName: "ProductTable",
	render:function  () {
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function  (product) {

			if(product.name.indexOf(this.props.filterText) ==-1 || (!product.stocked && this.props.inStockOnly)){
				return;
			}

			if(product.category !==lastCategory){

				rows.push(React.createElement(ProductCategoryRow, {category: product.category, key: product.category}));

			}

			rows.push(React.createElement(ProductRow, {product: product, key: product.name}));
			lastCategory = product.category;
		}.bind(this));
		return (
		React.createElement("table", null, 
			React.createElement("thead", null, 
				React.createElement("tr", null, 
					React.createElement("th", null, "Name"), 
					React.createElement("th", null, "Price")
				)
			), 
			React.createElement("tbody", null, rows)
		)
		);
	}
});

var SearchBar = React.createClass({displayName: "SearchBar",

	handleChange:function(){
		this.props.OnUserInput(this.refs.filterTextInput.value,this.refs.inStockOnlyInput.checked);
	},
	render:function(){
		return (
			React.createElement("form", null, 
				React.createElement("input", {ref: "filterTextInput", type: "text", placeholder: "Search...", onChange: this.handleChange, value: this.props.filterText}), 
				React.createElement("p", null, 
					React.createElement("input", {ref: "inStockOnlyInput", type: "checkbox", checked: this.props.inStockOnly, onChange: this.handleChange}), 
					' ', 
					"Only show products in stock"
				)
			)
			);
	}
});

var FilterableProductTable = React.createClass({displayName: "FilterableProductTable",

	getInitialState:function(){

		return {filterText:'F',inStockOnly:false}
	},
	handleUserInput:function  (filterText,inStockOnly) {
		this.setState({
			filterText:filterText,
			inStockOnly:inStockOnly
		});
	},
	render:function  () {
		console.log(this.props.foo);
		console.log(this.props.name);

		return (

			React.createElement("div", null, 
				React.createElement(SearchBar, {OnUserInput: this.handleUserInput, filterText: this.state.filterText, inStockOnly: this.state.inStockOnly}), 
				React.createElement(ProductTable, {products: this.props.products, filterText: this.state.filterText, inStockOnly: this.state.inStockOnly})
			)			

			);
	}
});

var PRODUCTS = [
	{category:'Sporting Goods',price:'$49.99',stocked:false,name:'Football'},
	{category:'Sporting Goods',price:'$9.99',stocked:true,name:'Baseball'},
	{category:'Sporting Goods',price:'$29.99',stocked:true,name:'Basketball'},
	{category:'Electronics',price:'$99.99',stocked:true,name:'Ipod Touch'},
	{category:'Electronics',price:'$399.99',stocked:true,name:'iPhone 5'},
	{category:'Electronics',price:'$199.99',stocked:true,name:'Nexus 7'}
];



ReactDOM.render(
	React.createElement(FilterableProductTable, {products: PRODUCTS}),
	document.getElementById('container')
	);