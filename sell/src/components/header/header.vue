<template> 
	<div class="header">
	    <div class="content-wraper">
	    	<div class="avator">
	    		<img width="64" height="64" :src="seller.avatar">
	    	</div>
	    	<div class="content">
	    		<div class="title">
	    			<span class="brand"></span>
	    			<span class="name">{{seller.name}}</span>
	    		</div>
	    		<div class="description">
	    			{{seller.description}}/{{seller.deliveryTime}}分钟送达
	    		</div>
	    		<div v-if="seller.supports" class="support" >
	    			<span class="icon" :class="classMap[seller.supports[0].type]"></span>
	    			<span class="text">{{seller.supports[0].description}}</span>
	    		</div>
	    		<div v-if="seller.supports" class="support-count" @click="showDetail">
	    			<span class="count">{{seller.supports.length}}个</span>
	    			<i class="icon-keyboard-arrow-right"></i>
	    		</div>
	    	</div>
	    </div>
	    <div class="bulletin-wrapper">
	    	<span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
	    	<i class="icon-keyboard-arrow-right"></i>
	    </div>
	    <div class="background">
	    	<img :src="seller.avatar" width="100%" height="100%">
	    </div>
	    <div v-show="detailShow" class="detail"></div>
    </div>
</template>

<script type="ecmascript-6">
    export default{
    	// 通过props属性接收父组件传来的值
        props: {
          seller: Object
        },
        data(){
        	return{
        		detailShow: false
        	}
        },
        methods:{
        	showDetail(){
        		this.detailShow = true;
        	}
        },
        created(){
        	this.classMap = ['decrease','discount','special','invoice','guarantee'];
        }
    }
</script>

<style rel="stylesheet">
	.header{
		color: #fff;
		position: relative;
		overflow: hidden;
		background: rgba(7,17,27,0.5);
	}
	.header .content-wraper{
		padding:24px 12px 18px 24px;
		font-size: 0;
		position: relative;
	}
	.avator {
		display: inline-block;
	}
	 .content{
		display: inline-block;
		font-size: 14px;
		margin-left: 16px;
	}
	.title{
		margin:2px 0 8px 0;
	}
	.brand{
		display: inline-block;
		width: 30px;
		height: 18px;
		vertical-align: top;
		background-image: url("img/brand@2x.png");
		background-size: 30px 18px;
		background-repeat: no-repeat;
	}
	.name{
		margin-left: 6px;
		font-size: 16px;
		line-height: 18px;
		font-weight: bold;
	}
	.description{
		margin-bottom: 10px;
		line-height: 12px;
		font-size: 12px;
	}
	.support .icon{
		display: inline-block;;
		width: 12px;
		height: 12px;
		margin-right: 4px;
		background-size: 12px 12px;
		background-repeat: no-repeat;
		vertical-align: top;
	}
	.support .icon.decrease{
		background-image: url(img/decrease_1@2x.png);
	}
	.support .icon.discount{
		background-image: url(img/discount_1@2x.png);
	}
	.support .icon.guarantee{
		background-image: url(img/guarantee_1@2x.png);
	}
	.support .icon.special{
		background-image: url(img/special_1@2x.png);
	}
	.support .icon.invoive{
		background-image: url(img/invoice_1@2x.png);
	}
	.support .text{
		line-height: 12px;
		font-size: 10px;
		color: #fff;
		vertical-align: top;
	}
	.support-count{
		position: absolute;
		right: 12px;
		bottom: 18px;
		padding: 0 8px;
		height: 24px;
		line-height: 24px;
		border-radius: 14px;
		background: rgba(0,0,0,0.2);
		text-align: center;
	}
	.support-count .count{
		font-size: 10px;
	}
	.support-count .icon-keyboard-arrow-right{
		font-size: 10px;
		line-height: 24px;
	}


	.bulletin-wrapper{
		height: 28px;
		line-height: 28px;
		padding: 0 22px 0 12px;
		white-space: nowrap;
		overflow:hidden;
		text-overflow: ellipsis;
		position: relative;
		background: rgba(7,17,27,0.2);
	}
	.bulletin-title{
		display: inline-block;
		width: 22px;
		height: 12px;
		background-image: url("img/bulletin@2x.png");
		background-size: 22px 12px;
		background-repeat: no-repeat;
		vertical-align: top;
		margin-top: 8px;
	}
	.bulletin-text{
		font-size: 10px;
		margin:0 4px;
		vertical-align: top;
	}
	.bulletin-wrapper .icon-keyboard-arrow-right{
		position: absolute;
		font-size: 10px;
		right: 12px;
		top: 8px;
	}

	.background{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: blur(10px);
	}

	.detail{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 100;
		width: 100%;
		height: 100%;
		overflow: auto;
		background: rgba(7,17,27,0.8);
	}
</style>