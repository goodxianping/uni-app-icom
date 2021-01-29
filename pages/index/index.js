import util from '../../common/util.js'

module.exports = {
	data() {
		return {
			scrollView: {
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			},
			swiper: {
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				indColor: '#80FFFFFF',
				indActColor: '#FFFFFF'
			},
			adImgs: ['../../static/img/2.png', '../../static/img/3.png'],
			mallTimeSales: [{
				title: '一级黄冠梨 净重10斤 梨子今天在做小程序的时候遇到了这个问题',
				price: 44.9,
				oriPrice: 66.88,
				pic: 'http://10.10.23.119/mall-prod.png'
			}, {
				title: '一级黄冠梨 净重10斤 梨子今天在做小程序的时候遇到了这个问题',
				price: 39.9,
				oriPrice: 222.88,
				pic: 'http://10.10.23.119/mall-prod.png'
			}, {
				title: '一级黄冠梨 净重10斤 梨子今天在做小程序的时候遇到了这个问题',
				price: 66.9,
				oriPrice: 111.88,
				pic: 'http://10.10.23.119/mall-prod.png'
			}, {
				title: '一级黄冠梨 净重10斤 梨子',
				price: 319.9,
				oriPrice: 334.88,
				pic: 'http://10.10.23.119/mall-prod.png'
			}, {
				title: '一级黄冠梨 净重10斤 梨子',
				price: 221.9,
				oriPrice: 444.88,
				pic: 'http://10.10.23.119/mall-prod.png'
			}],
			mallTuanSales: [{
					title: '苹果2020新款13.3英寸超轻薄学生办公手提笔记本',
					sales: 35,
					group: 3,
					price: 2999.00,
					oriprice: 3999.00,
					pic: 'http://10.10.23.119/mall-tuan.png'
				},
				{
					title: '苹果2020新款13.3英寸超轻薄学生办公手提笔记本, 英寸超轻薄学生办公手提笔记本',
					sales: 65,
					group: 5,
					price: 432.00,
					oriprice: 699.00,
					pic: 'http://10.10.23.119/mall-tuan.png'
				},
				{
					title: '苹果2020新款13.3英寸超轻薄学生办公手提笔记本',
					sales: 11,
					group: 10,
					price: 99.00,
					oriprice: 199.00,
					pic: 'http://10.10.23.119/mall-tuan.png'
				}
			],
			activities: [{
					title: '2020智慧社区最萌宠物摄影大赛',
					deadline: '2020年2月10日',
					participant: 33,
					thumbs: 345,
					end: false,
					pic: 'http://10.10.23.119/activity_1.png',
					online: true
				},
				{
					title: '2020智慧社区最萌宠物摄影大赛',
					deadline: '2020年2月10日',
					participant: 999,
					thumbs: 8888,
					end: true,
					pic: 'http://10.10.23.119/activity_2.png',
					online: false
				}
			],
			news: [{
					title: '国家5Ａ级旅游景区-濠河风景区桃花吐妍, 国家5Ａ级旅游景区-濠河风景区桃花吐妍',
					date: '2021年2月10日',
					pic: 'http://10.10.23.119/new1.png'
				},
				{
					title: '新鲜事!全方位探访城关区首家小区生活垃圾分拣中心',
					date: '2021年1月10日',
					pic: 'http://10.10.23.119/new2.png'
				}, {
					title: '西安市5月份共37.1万名学生陆续开学复课',
					date: '2020年12月10日',
					pic: 'http://10.10.23.119/new3.png'
				}
			],
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.detail.value
			},
			durationChange(e) {
				this.duration = e.detail.value
			}
		}
	},
	onLoad() {

	},
	methods: {
		upper: function(e) {
			//console.log(e)
		},
		lower: function(e) {
			//console.log(e)
		},
		scroll: function(e) {
			console.log(util.dateUtils.format('2021-01-02 08:12:00'));
			this.scrollView.old.scrollTop = e.detail.scrollTop
		}
	}
}
