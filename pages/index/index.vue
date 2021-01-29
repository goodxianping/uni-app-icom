<template>
	<view class="root">
		<scroll-view :scroll-top="scrollView.scrollTop" scroll-y="true" class="scrollViewV" @scrolltoupper="upper"
		 @scrolltolower="lower" @scroll="scroll">
			<view class="uni-margin-wrap">
				<swiper class="swiper" circular :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval"
				 :indicator-color="swiper.indColor" :indicator-active-color="swiper.indActColor" :duration="swiper.duration">
					<swiper-item v-for="(imgSrc, index) in adImgs" :key="index">
						<image class="swiper-item" :src="imgSrc" mode="aspectFit"></image>
					</swiper-item>
				</swiper>
			</view>
			<view class="navi-recommend">
				<view class="navi-recommend-item">
					<image src="../../static/img/navi_payment.png"></image>
					<text>物业缴费</text>
				</view>
				<view class="navi-recommend-item">
					<image src="../../static/img/navi_invite.png"></image>
					<text>邀请加入</text>
				</view>
				<view class="navi-recommend-item">
					<image src="../../static/img/navi_repair.png"></image>
					<text>报事报修</text>
				</view>
			</view>
			<view class="navi-services">
				<view class="navi-services-title">
					<view class="navi-services-title-left">功能服务</view>
					<view class="navi-services-title-right">更多</view>
				</view>
				<view class="navi-services-list">
					<view class="navi-services-list-item">
						<image src="../../static/img/navi_record.png"></image>
						<text>装修报备</text>
					</view>
					<view class="navi-services-list-item">
						<image src="../../static/img/navi_house.png"></image>
						<text>我的房屋</text>
					</view>
					<view class="navi-services-list-item">
						<image src="../../static/img/navi_onekey_open.png"></image>
						<text>一键开门</text>
					</view>
					<view class="navi-services-list-item">
						<image src="../../static/img/navi_conv.png"></image>
						<text>便民服务</text>
					</view>
					<view class="navi-services-list-item">
						<image src="../../static/img/navi_mall_home.png"></image>
						<text>社区商城</text>
					</view>
				</view>
			</view>
			<view class="navi-help">
				<view class="navi-help-notice">
					<view class="navi-help-notice-preimg"></view>
					<view class="navi-help-notice-cont">
						<view class="navi-help-notice-cont-type">
							<text>温馨提示</text>
						</view>
						<text>疫情期间，做好防护措施，请不要随意外出聚会聚餐</text>
					</view>
					<view class="navi-help-notice-arrowimg"></view>
				</view>
				<view class="common-line"></view>
				<view class="navi-help-list">
					<view class="navi-help-list-guide">
						<view class="navi-help-list-guide-desc">
							<text>新手指引</text>
							<text>快速入手指南</text>
						</view>
						<view class="navi-help-list-guide-img"></view>
					</view>
					<view class="navi-help-list-wy">
						<view class="navi-help-list-wy-desc">
							<text>联系物业</text>
							<text>一键拔号</text>
						</view>
						<view class="navi-help-list-wy-img"></view>
					</view>
				</view>
			</view>
			<view class="mall-sales">
				<view class="mall-sales-time">
					<view class="mall-sales-time-ahead">
						<text class="mall-sales-time-ahead-title">限时抢购</text>
						<view class="mall-sales-time-ahead-rect"><text>00</text></view><text class="mall-sales-time-ahead-sep">:</text>
						<view class="mall-sales-time-ahead-rect"><text>26</text></view><text class="mall-sales-time-ahead-sep">:</text>
						<view class="mall-sales-time-ahead-rect"><text>55</text></view>
					</view>
					<view class="mall-sales-time-tail">
						<text>更多</text>
						<view class="mall-sales-time-tail-moreimg"></view>
					</view>
				</view>
				<scroll-view class="mall-sales-products" scroll-x="true" @scroll="scroll">
					<view v-for="(prod, index) in mallTimeSales" :key="index" class="mall-sales-products-item">
						<view class="mall-sales-products-item-top">
							<image class="mall-sales-products-item-img" :src="prod.pic"></image>
							<view class="mall-sales-products-item-title">{{prod.title}}</view>
						</view>
						<view class="mall-sales-products-item-bottom">
							<view class="mall-sales-products-item-bottom-price">
								<view><text>¥</text><text>{{prod.price}}</text></view>
								<text>¥{{prod.oriPrice}}</text>
							</view>
							<image class="mall-sales-products-item-bottom-addimg" src="../../static/img/mall-add.png"></image>
						</view>
					</view>
				</scroll-view>
			</view>
			<view class="mall-pintuan">
				<view class="mall-pintuan-head">
					<text>社区团购</text>
					<view><text>更多</text>
						<image src="../../static/img/arrow_gray.png"></image>
					</view>
				</view>
				<view class="mall-pintuan-products">
					<view v-for="(item, index) in mallTuanSales" :key="index" class="mall-pintuan-products-item">
						<image :src="item.pic"></image>
						<view class="mall-pintuan-products-item-right">
							<text class="mall-pintuan-products-item-right-head">
								<text class="mall-pintuan-products-item-right-head-1">{{item.group}}人团</text>
								<text class="mall-pintuan-products-item-right-head-2">{{item.title}}</text>
							</text>
							<view class="mall-pintuan-products-item-right-sales">已售{{item.sales}}件</view>
							<view class="mall-pintuan-products-item-right-bottom">
								<view><text>¥</text><text>{{item.price}}</text><text>¥{{item.oriprice}}</text></view>
								<button type="default" plain="true">
									<text>去拼团</text>
									<image src="../../static/img/arrow_blue.png"></image>
								</button>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="activitys">
				<view class="activitys-head">
					<text>社区活动</text>
					<view><text>更多</text>
						<image src="../../static/img/arrow_gray.png"></image>
					</view>
				</view>
				<view class="activitys-list">
					<view v-for="(item, index) in activities" :key="index" class="activitys-list-item">
						<view class="activitys-list-item-top">
							<image class="activitys-list-item-top-pic" :src="item.pic" mode="aspectFill"></image>
							<text class="activitys-list-item-top-title">{{item.title}}</text>
							<text class="activitys-list-item-top-deadline">活动截止：{{item.deadline}}</text>
						</view>
						<view class="activitys-list-item-bottom">
							<view class="activitys-list-item-bottom-left">
								<view class="activitys-list-item-bottom-avatar">
									<image src="http://10.10.23.119/avatar1.png"></image>
									<image src="http://10.10.23.119/avatar2.png"></image>
									<image src="http://10.10.23.119/avatar3.png"></image>
								</view>
								<text class="activitys-list-item-bottom-participant">{{item.participant}}人参与</text>
								<image class="activitys-list-item-bottom-thumb" src="../../static/img/thumb_selected.png"></image>
								<text class="activitys-list-item-bottom-thumbnum">{{item.thumbs}}</text>
							</view>
							<button type="primary">
								<text>去参与</text>
							</button>
						</view>
						<image v-show="item.end" class="activitys-list-item-imageover" src="http://10.10.23.119/activity_over.png" mode="aspectFill"></image>
						<text class="activitys-list-item-online">{{item.online?'线上活动':'线下活动'}}</text>
					</view>
				</view>
			</view>
			<view class="news">
				<view class="news-head">
					<text>社区新闻</text>
					<view><text>更多精彩</text>
						<image src="../../static/img/arrow_gray.png"></image>
					</view>
				</view>
				<view class="news-list">
					<view v-for="(item, index) in news" :key="index" class="news-list-item">
						<view class="news-list-item-left">
							<image :src="item.pic" mode="aspectFill"></image>
						</view>
						<view class="news-list-item-right">
							<text>{{item.title}}</text>
							<text>{{item.date}}</text>
						</view>
					</view>
				</view>
			</view>
			<view class="scroll-bottom" style="height: 24rpx;"></view>
		</scroll-view>
	</view>
</template>

<script>
	import App from './index.js';
	export default App;
</script>

<style>
	@import url("./index.css");
</style>
