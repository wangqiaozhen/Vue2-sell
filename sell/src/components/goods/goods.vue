<template>
    <div class="goods">
    	<div class="menu-wrapper" ref="menuWrapper">
    		<ul>
    			<li v-for="item in goods" class="menu-item">
    				<span class="text">
    					<span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>
    					{{item.name}}
    				</span>
    			</li>
    		</ul>
    	</div>
    	<div class="food-wrapper" ref="foodWrapper">
    		<ul>
    			<li v-for="item in goods">
    				<h1 class="title">{{item.name}}</h1>
    				<ul>
    					<li v-for="food in item.foods" clas\s="food-item">
    						<div class="icon">
    							<img :src="food.icon" width="57px" height="57px">
    						</div>
    						<div class="content">
    							<h2 class="name">{{food.name}}</h2>
    							<p class="desc">{{food.description}}</p>
    							<div class="extra">
    								<span class="count">月售{{food.sellCount}}份</span><span>好评{{food.rating}}率</span>
    							</div>
    							<div class="price">
    								<span class="now">${{food.price}}</span>
    								<span class="old" v-show="food.oldPrice">${{food.oldPrice}}</span>
    							</div>
    						</div>
    					</li>
    				</ul>
    			</li>
    		</ul>
    	</div>
    	<shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
    </div>

</template>

<script type="ecmascript-6">
 import BScroll from 'better-scroll';
 import shopcart from '../../components/shopcart/shopcart.vue';

	const ERR_OK = 0;
    export default{
    	props:{
    		seller:{   //数据由router-view传递过来
    			type:Object
    		}
    	},
    	data(){
    		return {
    			goods:[]
    		}
    	},
    	created(){
    		this.classMap = ['decrease','discount','special','invoice','guarantee'];

    		this.$http.get('/api/goods').then((response)=>{
    			response = response.body;
    			if(response.errno == ERR_OK){
    				this.goods = response.data;
    				 this.$nextTick(function(){
    					this._initScroll();
    				});
    				
    			}
    		});
    	},
    	methods:{
    		_initScroll() {

    			//this.$refs.menuWrapper 通过ref属性获取dom元素
    			this.menuScroll = new BScroll(this.$refs.menuWrapper, {});//dom元素，滚动参数
    			this.foodsScroll = new BScroll(this.$refs.foodWrapper, {});
    		}
    	},
    	components: {
    		shopcart
    	}
    }
</script>

<style rel="stylesheet">
	.goods{
		position: absolute;
		top: 177px;
		bottom: 46px;
		width: 100%;
		overflow:hidden;
		display: flex;
	}
	.menu-wrapper{
		flex: 0 0 80px;
		width: 80px;
		background: #f3f5f7;
	}
	.food-wrapper{
		flex: 1;
	}
	.menu-wrapper .menu-item{
		display: table;
		height: 54px;
		width: 56px;
		line-height: 14px;
    	padding: 0 12px;
	}
	.menu-wrapper .menu-item .icon{
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 2px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
		vertical-align: top;
	}
	.menu-wrapper .menu-item .icon.decrease{
		background-image: url(../goods/img/decrease_3@2x.png);
	}
	.menu-wrapper .menu-item  .icon.discount{
		background-image: url(../goods/img/discount_3@2x.png);
	}
	.menu-wrapper .menu-item .icon.guarantee{
		background-image: url(../goods/img/guarantee_3@2x.png);
	}
	.menu-wrapper .menu-item .icon.special{
		background-image: url(../goods/img/special_3@2x.png);
	}
	.menu-wrapper .menu-item .icon.invoive{
		background-image: url(../goods/img/invoice_3@2x.png);
	}

	.menu-wrapper .menu-item .text{
		display: table-cell;
		width: 56px;
		vertical-align: middle;
		font-size: 12px;
		border-bottom:1px solid rgba(7,17,27,0.1);
	}

	.food-wrapper{
		flex: 1;
	}
	.food-wrapper .title{
		padding-left: 14px;
		height: 26px;
		line-height: 26px;
		border-left: 2px solid #d9dde1;
		font-size: 12px;
		color: rgb(147,153,159);
		background: #f3f5f7;
	}
	.food-wrapper .food-item{
		display: flex;
		margin-top: 18px;
		border-bottom:1px solid rgba(7,17,27,0.1);
		padding-bottom: 18px;
		margin-left: 18px;
    	margin-right: 18px;
	}
	.food-wrapper .food-item:last-child{
		border:none;
		margin-bottom: 0;
	}
	.food-wrapper .food-item .icon{
		flex: 0 0 57px;
		margin-right: 10px;
	}
	.food-wrapper .food-item  .content{
		flex: 1;
	}
	.food-wrapper .food-item  .content .name{
		margin:2px 0 8px 0;
		height: 14px;
		line-height: 14px;
		font-size: 14px;
		color: rgb(7, 17,27);
	}
	.food-wrapper .food-item  .content .desc, .food-wrapper .food-item  .content .extra{
		line-height: 10px;
		font-size: 10px;
		color: rgb(147, 153, 159);
	}
	.food-wrapper .food-item  .content .desc{
		margin-bottom: 8px;
		line-height: 12px;
	}
	.food-wrapper .food-item  .content .extra .count{
		margin-right: 12px;
	}
	.food-wrapper .food-item .price{
		font-weight: 700;
		line-height: 24px;
	}
	.food-wrapper .food-item .price .now{
		margin-right: 8px;
		font-size: 14px;
		color: rgb(240, 20, 20);
	}
	.food-wrapper .food-item .price .old{
		color: rgb(147, 153, 159);
		font-size:10px;
		text-decoration: line-through;
	}
</style>