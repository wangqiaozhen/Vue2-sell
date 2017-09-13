<template>
    <div class="goods">
    	<div class="menu-wrapper">
    		<ul>
    			<li v-for="item in goods" class="menu-item">
    				<span class="text">
    					<span class="icon" v-show="item.type>0" :class="classMap[item.type]">
    						{{item.name}}
    					</span>
    				</span>
    			</li>
    		</ul>
    	</div>
    	<div class="foods-wrapper"></div>
    </div>
</template>

<script type="ecmascript-6">
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
    			}
    		});
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
	.foods-wrapper{
		flex: 1;
	}
	.menu-wrapper .menu-item{
		display: table;
		height: 54px;
		width: 56px;
		line-height: 14px;

	}
	.menu-wrapper .menu-item .icon{
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
		vertical-align: top;
	}
	.menu-wrapper .menu-item .icon.decrease{
		background-image: url(./img/decrease_1@2x.png);
	}
	.menu-wrapper .menu-item  .icon.discount{
		background-image: url(./img/discount_1@2x.png);
	}
	.menu-wrapper .menu-item .icon.guarantee{
		background-image: url(./img/guarantee_1@2x.png);
	}
	.menu-wrapper .menu-item .icon.special{
		background-image: url(./img/special_1@2x.png);
	}
	.menu-wrapper .menu-item .icon.invoive{
		background-image: url(./img/invoice_3@2x.png);
	}
</style>