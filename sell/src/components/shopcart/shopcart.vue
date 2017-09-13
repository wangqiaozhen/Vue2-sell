<template>
    <div class="shopcart">
	    <div class="content">
	    	<div class="content-left">
	    		<div class="logo-wrapper">
	    			<div class="logo">
	    				<span class="icon-shopping-cart"></span>
	    			</div>
	    		</div>
	    		<div class="price">{{totalPrice}}元</div>
	    		<div class="desc">另需配送费{{deliveryPrice}}元</div>
	    	</div>
	    	<div class="content-right">
	    		<div class="pay">
	    			${{minPrice}}元起送
	    		</div>
	    	</div>
	    </div>
    </div>
</template>

<script type="ecmascript-6">
    export default{
    	props:{
    		seller:{
    			type:Object
    		},
    		deliveryPrice:{//配送费
				type:Number,
    			default:0
    		},
    		minPrice:{//最少起送价格
    			type:Number,
    			default:0
    		},
    		selectFoods:{//已选食物
    			type:Array,
    			default(){
    				return [];
    			}
    		}
    	},
    	computed: {
    		totalPrice(){
    			let total = 0;
    			this.selectFoods.forEach((food)=>{
    				total +=food.price * food.count;
    			});
    			return total;
    		}
    	}
    }
</script>

<style rel="stylesheet">
    .shopcart{
    	position: fixed;
    	z-index: 50;
    	bottom: 0;
    	left: 0;
    	width: 100%;
    	height: 48px;
    	background: #000;
    }

    .shopcart .content{
    	display: flex;
    	background: #141d27;
    }
    .shopcart .content-left{
		flex: 1;
    }
    .shopcart .content-right{
    	flex: 0 0 105px;
    	width: 105px;
    }
    .shopcart .logo-wrapper{
		display: inline-block;
		position: relative;
		top: -10px;
		margin:0 12px;
		padding: 6px;
		width: 56px;
		height: 56px;
		box-sizing: border-box;
		border-radius: 50%;
		background: #141d27;
    }
    .shopcart  .logo{
    	width: 100%;
    	height: 100%;
    	border-radius: 50%;
    	background: #2b343c;
    	text-align: center;	
    }
    .shopcart .icon-shopping-cart{
    	color: #80858a;
    	font-size:24px;
    	font-size: 24px;
    	line-height: 44px;

    }
     .shopcart .price{
		display: inline-block;
		vertical-align: top;
		line-height: 24px;
		box-sizing: border-box;
		margin-top: 12px;
		padding-right: 12px;
		border-right:1px solid rgba(255,255,255,0.1);
		font-size: 16px;
		font-weight: 700;
		color: rgba(255,255,255,0.4);
    }
     .shopcart .desc{
		display: inline-block;
		vertical-align: top;
		line-height: 24px;
		margin-left: 12px;
		font-size: 10px;
		margin-top: 12px;
		color:  rgba(255,255,255,0.4);
    }
    .shopcart .pay{
    	height: 48px;
    	line-height: 48px;
    	text-align: center;
    	font-size: 12px;
    	color:  rgba(255,255,255,0.4);
    	background: #2b333b;
    }
</style>