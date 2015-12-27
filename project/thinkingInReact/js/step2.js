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

			if(product.name.indexOf(this.props.filterText) ==-1 || (!product.stocked && this.props.inStockOnly)){
				return;
			}

			if(product.category !==lastCategory){

				rows.push(<ProductCategoryRow category={product.category} key={product.category}></ProductCategoryRow>);

			}

			rows.push(<ProductRow product={product} key={product.name}></ProductRow>);
			lastCategory = product.category;
		}.bind(this));
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

	handleChange:function(){
		this.props.OnUserInput(this.refs.filterTextInput.value,this.refs.inStockOnlyInput.checked);
	},
	render:function(){
		return (
			<form>
				<input ref='filterTextInput' type="text" placeholder="Search..."  onChange={this.handleChange} value={this.props.filterText}/>
				<p>
					<input ref='inStockOnlyInput' type="checkbox" checked={this.props.inStockOnly} onChange={this.handleChange}/>
					{' '} 
					Only show products in stock
				</p>
			</form>
			);
	}
});

var FilterableProductTable = React.createClass({

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
		return (

			<div>
				<SearchBar OnUserInput={this.handleUserInput} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}></SearchBar>
				<ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}></ProductTable>
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