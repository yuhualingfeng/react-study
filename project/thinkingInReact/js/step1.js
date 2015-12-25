// var ProductCategoryRow = React.createClass({
// 	render:function(){
// 		return (
// 			<tr><th colspan="2">{this.props.category}</th></tr>
// 			);
// 	}
// });

var ProductCategoryRow = React.createClass({
    render: function() {
        return (<tr className='productCategoryRow'><th colSpan="2">{this.props.category}</th></tr>);
    }
});

var ProductRow = React.createClass({


	render:function  () {
		var name = this.props.product.stocked ? this.props.product.name : <span style={{color:'red','fontSize':'20px'}}>{this.props.product.name}</span>;
		return (

			<tr>
				<td>{name}</td>
				<td>{this.props.product.price}</td>
			</tr>

			);
	}

});

var ProductTable = React.createClass({
	render:function  () {
		var rows = [];
		var lastCategory = null;
		this.props.products.forEach(function  (product) {
			if(product.category !==lastCategory){

				rows.push(<ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>);

			}

			rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
			lastCategory = product.category;
		});
		return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
		);
	}
});

var SearchBar = React.createClass({

	render:function(){
		return (
			<form>
				<input type="text" placeholder="Search..."/>
				<p>
					<input type="checkbox"/>
					{' '} 
					Only show products in stock
				</p>
			</form>
			);
	}
});

var FilterableProductTable = React.createClass({
	render:function  () {
		return (

			<div>
				<SearchBar></SearchBar>
				<ProductTable products={this.props.products}></ProductTable>
			</div>			

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
	<FilterableProductTable products={PRODUCTS}></FilterableProductTable>,
	document.getElementById('container')
	);