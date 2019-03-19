window.onload = function () {
  var data = {
    "round": ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/1.jpg"],
    "place": ["成都", "上海", "北京", "上海", "杭州", "曼谷", "东京", "洛杉矶", "纽约"],
    "tit": ["去往", "热门地点", "房间", "日本赏樱", "诚信推出爱彼迎Plus", "高分体验"],
    "titmin": ["温馨的小屋", "住进不一样的樱花季", "品质和舒适性经过验证的房源", "在下趟旅程中，不放预定由本地达人组织的体验活动"],
    "room": [
      [
        {
          "srcs": "img/11.jpg",
          "p1": "整套公寓·2张床",
          "p2": "漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房",
          "price": "￥138每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/12.jpg",
          "p1": "整套公寓·3张床",
          "p2": "白金五星级标准的地中海国际酒店气派超然，雄踞商业及休闲中心地带",
          "price": "￥547每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/13.jpg",
          "p1": "整套公寓·4张床",
          "p2": "俯瞰广州城，大家风范，舍我其谁。四百余间超豪华客房均配有最豪华的布艺",
          "price": "￥211每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        }
      ],
      [
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
      ],
      [
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        }
      ],
      [
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        }
      ],
      [
        {
          "srcs": "img/11.jpg",
          "p1": "整套公寓·2张床",
          "p2": "漫漫|拿铁 楼下就是太古里春熙路/市中心双地铁/家庭影院/北欧风精致套房",
          "price": "￥138每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/12.jpg",
          "p1": "整套公寓·3张床",
          "p2": "白金五星级标准的地中海国际酒店气派超然，雄踞商业及休闲中心地带",
          "price": "￥547每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/13.jpg",
          "p1": "整套公寓·4张床",
          "p2": "俯瞰广州城，大家风范，舍我其谁。四百余间超豪华客房均配有最豪华的布艺",
          "price": "￥211每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        }
      ],
      [
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/16.jpg",
          "p1": "整套公寓·2张床",
          "p2": "广州地中海国际酒店坐落于广州最为繁华的天河路南段，地理位置得天独厚。",
          "price": "￥156每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
      ],
      [
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/15.jpg",
          "p1": "整套公寓·6张床",
          "p2": "给每一位客人豪华舒适、至尊至贵的体验。",
          "price": "￥999每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        }
      ],
      [
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/14.jpg",
          "p1": "整套公寓·5张床",
          "p2": "家具和设施，以浓重而不失活泼的色调、奔放且大气的布局、近似自然优美的线条",
          "price": "￥118每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        }
      ],
      [
        {
          "srcs": "img/13.jpg",
          "p1": "整套公寓·4张床",
          "p2": "俯瞰广州城，大家风范，舍我其谁。四百余间超豪华客房均配有最豪华的布艺",
          "price": "￥211每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/13.jpg",
          "p1": "整套公寓·4张床",
          "p2": "俯瞰广州城，大家风范，舍我其谁。四百余间超豪华客房均配有最豪华的布艺",
          "price": "￥211每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/13.jpg",
          "p1": "整套公寓·4张床",
          "p2": "俯瞰广州城，大家风范，舍我其谁。四百余间超豪华客房均配有最豪华的布艺",
          "price": "￥211每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/13.jpg",
          "p1": "整套公寓·4张床",
          "p2": "俯瞰广州城，大家风范，舍我其谁。四百余间超豪华客房均配有最豪华的布艺",
          "price": "￥211每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/13.jpg",
          "p1": "整套公寓·4张床",
          "p2": "俯瞰广州城，大家风范，舍我其谁。四百余间超豪华客房均配有最豪华的布艺",
          "price": "￥211每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        },
        {
          "srcs": "img/13.jpg",
          "p1": "整套公寓·4张床",
          "p2": "俯瞰广州城，大家风范，舍我其谁。四百余间超豪华客房均配有最豪华的布艺",
          "price": "￥211每晚·免费退订",
          "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
        }
      ]
    ],
    "flower": [
      {
        "srcs": "img/17.jpg",
        "p1": "整套公寓·3张床",
        "p2": "酒店毗邻地铁站和主要商务区，距亚洲著名的购物圈—正佳广场",
        "price": "￥158每晚·免费退订",
        "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
      },
      {
        "srcs": "img/18.jpg",
        "p1": "整套公寓·4张床",
        "p2": "宏城广场和天河城咫尺之遥。从酒店到广州东站或广交会琶洲展馆仅需10分钟",
        "price": "￥654每晚·免费退订",
        "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
      },
      {
        "srcs": "img/19.jpg",
        "p1": "整套公寓·5张床",
        "p2": "华灯初上，万物升平，数十间豪华的KTV包房隐没在皇家的夜色之中，这里的镜",
        "price": "￥723每晚·免费退订",
        "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
      }
    ],
    "experience": [
      {
        "srcs": "img/20.jpg",
        "p1": "整套公寓·1张床",
        "p2": "家国际饭店是融会国际顶尖商务酒店设计理念，装潢艺术构造于一体的四星级豪华酒店",
        "price": "￥164每晚·免费退订",
        "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
      },
      {
        "srcs": "img/21.jpg",
        "p1": "整套公寓·4张床",
        "p2": "酒店拥有豪华套房、商务套房、高级房及标准房114间。酒店客房关注到每一个细节的典雅装饰",
        "price": "￥184每晚·免费退订",
        "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
      },
      {
        "srcs": "img/22.jpg",
        "p1": "整套公寓·2张床",
        "p2": "尤其是精致前卫的磨砂玻璃幕墙浴室，令居住其中成为美的享受，让商务劳顿烟消云散",
        "price": "￥925每晚·免费退订",
        "hidetext": "国际五星温德姆/国光豪生等连住，多房型可选，丰富自助早餐+娱乐设施，蜈支洲畅玩一天，接机0等待"
      }
    ],
    "cximg": "img/7.jpg",
    "join": [
      ["加入尚游", "招聘", "新闻", "政策", "帮助", "多元化归属感"],
      ["发现", "信任与安全", "工作机会", "游客指南"],
      ["关于我们", "尚游介绍", "联系我们", "合作伙伴"],
      ["网站条款", "会员条款", "社区指南", "版权声明", "免责声明"]
    ]
  }

  //回顶部
  window.onscroll = function () {
    //获取页面的可视窗口高度
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    //在滚动的时候增加判断,控制显示与隐藏
    var osTop = document.documentElement.scrollTop || document.body.scrollTop;//特别注意这句，忘了的话很容易出错
    var location = document.getElementById("location")
    // console.log(osTop, clientHeight)
    if (osTop >= clientHeight) {
      location.style.display = 'block';
    } else {
      location.style.display = 'none';
    }
  };

  //添加轮播图的图片和按钮
  var imgList = document.querySelector("#imgList")
  var navDiv = document.querySelector("#navDiv")
  for (var i = 0; i < data.round.length; i++) {
    imgList.innerHTML += "<li><img src=\"" + data.round[i] + "\"/></li>"
    if (i !== 0) {
      navDiv.innerHTML += "<a href=\"javascript:;\">" + i + "</a>"
    }
  }
  //传中间的导航栏
  var popular = document.querySelector(".popular")
  for (var i = 0; i < data.place.length; i++) {
    popular.querySelectorAll("a")[i].innerText = data.place[i]
  }
  //传标题
  var tit = document.querySelectorAll(".tit")
  for (var i = 0; i < data.tit.length; i++) {
    tit[i].innerText = data.tit[i]
  }
  //传标题下面的小字
  var titmin = document.querySelectorAll(".titmin")
  for (var i = 0; i < data.titmin.length; i++) {
    titmin[i].innerText = data.titmin[i]
  }
  //传中间大图
  document.querySelector(".cximg").src = data.cximg
  //主房间信息
  var room = document.querySelector(".room")
  var popuAs = document.querySelectorAll(".popular>a")
  for (var i = 0; i < popuAs.length; i++) {
    popuAs[i].index = i
    popuAs[i].onclick = function () {
      for (var j = 0; j < popuAs.length; j++) {
        popuAs[j].className = ""
        this.className = "popusele"
      }
      room.innerHTML = ""
      for (var j = 0; j < data.room[this.index].length; j++) {
        room.innerHTML += "<div class=\"section\"><div class='imgext'></div><p>"
          + data.room[this.index][j].p1 + "</p><p>"
          + data.room[this.index][j].p2 + "</p><span>"
          + data.room[this.index][j].price + "</span><div class='sec-bot'>"
          + data.room[this.index][j].hidetext + "</div></div>"
        room.querySelectorAll(".imgext")[j].style.backgroundImage = "url(" + data.room[this.index][j].srcs + ")"
      }
    }
    popuAs[0].onclick();
  }

  //传樱花信息
  var flower = document.querySelector(".flower")
  for (var i = 0; i < data.flower.length; i++) {
    flower.innerHTML += "<div class=\"section\"><div class='imgext'></div><p>"
      + data.flower[i].p1 + "</p><p>"
      + data.flower[i].p2 + "</p><span>"
      + data.flower[i].price + "</span><div class='sec-bot'>"
      + data.flower[i].hidetext + "</div></div>"
    flower.querySelectorAll(".imgext")[i].style.backgroundImage = "url(" + data.flower[i].srcs + ")"
  }
  //传高分体验信息
  var experience = document.querySelector(".experience")
  for (var i = 0; i < data.experience.length; i++) {
    experience.innerHTML += "<div class=\"section\"><div class='imgext'></div><p>"
      + data.experience[i].p1 + "</p><p>"
      + data.experience[i].p2 + "</p><span>"
      + data.experience[i].price + "</span><div class='sec-bot'>"
      + data.experience[i].hidetext + "</div></div>"
    experience.querySelectorAll(".imgext")[i].style.backgroundImage = "url(" + data.experience[i].srcs + ")"
  }
  //传底部信息
  var bot_cen = document.querySelector(".bot-cen")
  var pull = document.querySelector(".pull")
  for (var i = 0; i < data.join.length; i++) {
    var myuls = document.createElement("ul")
    for (var j = 0; j < data.join[i].length; j++) {
      myuls.innerHTML += "<li>" + data.join[i][j] + "</li>"
    }
    bot_cen.insertBefore(myuls, pull)
  }

  //整个轮播图id
  var outer = document.getElementById("outer")
  //获取imgList
  var imgList = outer.querySelector("#imgList");
  //获取页面中所有的img标签
  var imgArr = outer.getElementsByTagName("img");
  for (var i = 0; i < imgArr.length; i++) {
    imgArr[i].style.width = document.body.clientWidth + "px"
  }
  var imgh = document.body.clientWidth
  //设置imgList的宽度
  imgList.style.width = imgh * imgArr.length + "px";
  /*设置导航按钮居中*/
  //获取navDiv
  var navDiv = document.getElementById("navDiv");
  //设置navDiv的left值
  navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";
  //默认显示图片的索引
  var index = 0;
  //获取所有的a
  var allA = outer.querySelectorAll("#navDiv>a");
  //设置默认选中的效果
  allA[index].style.backgroundColor = "black";
  /*
     点击超链接切换到指定的图片
       点击第一个超链接，显示第一个图片
       点击第二个超链接，显示第二个图片
   * */
  //为所有的超链接都绑定单击响应函数
  for (var i = 0; i < allA.length; i++) {
    //为每一个超链接都添加一个num属性
    allA[i].num = i;
    //为超链接绑定单击响应函数
    allA[i].onclick = function () {
      //关闭定时器
      clearInterval(timer)
      //获取点击超链接的索引,并将其设置为index
      index = this.num;
      //imgList.style.left = -520*index + "px";
      //设置选中的a
      setA();
      //使用move函数来切换图片
      move(imgList, "left", -imgh * index, 2000, function () {
        //动画执行完闭，开启定时器
        autoChange();
      });
    };
  }
  autoChange()

  //创建一个方法用来设置选中的a
  function setA() {
    //判断是不是到最后一张图片
    if (index >= imgArr.length - 1) {
      index = 0;
      imgList.style.left = 0
    }

    //遍历所有a，并将它们的背景颜色设置为红色
    for (var i = 0; i < allA.length; i++) {
      allA[i].style.backgroundColor = "";
    }
    //将选中的a设置为黑色
    allA[index].style.backgroundColor = "black";

  };

  var timer;

  //开启轮播的定时器
  function autoChange() {

    timer = setInterval(function () {
      index++;
      // index%=imgArr.length;
      move(imgList, "left", -imgh * index, 40, function () {
        setA();
      });
    }, 4000)
  }


};


//尝试创建一个可以执行简单动画的函数
/*
 * 参数：
 * 	obj:要执行动画的对象
 * 	attr:要执行动画的样式，比如：left top width height
 * 	target:执行动画的目标位置
 * 	speed:移动的速度(正数向右移动，负数向左移动)
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed, callback) {
  //关闭上一个定时器
  clearInterval(obj.timer);
  //获取元素目前的位置
  var current = parseInt(getStyle(obj, attr));
  //判断速度的正负值
  //如果从0 向 800移动，则speed为正
  //如果从800向0移动，则speed为负
  if (current > target) {
    //此时速度应为负值
    speed = -speed;
  }
  //开启一个定时器，用来执行动画效果
  //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
  obj.timer = setInterval(function () {
    //获取box1的原来的left值
    var oldValue = parseInt(getStyle(obj, attr));
    //在旧值的基础上增加
    var newValue = oldValue + speed;
    //判断newValue是否大于800
    //从800 向 0移动
    //向左移动时，需要判断newValue是否小于target
    //向右移动时，需要判断newValue是否大于target
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target;
    }
    //将新值设置给box1
    obj.style[attr] = newValue + "px";
    //当元素移动到0px时，使其停止执行动画
    if (newValue == target) {
      //达到目标，关闭定时器
      clearInterval(obj.timer);
      //动画执行完毕，调用回调函数
      callback && callback();
    }

  }, 30);
}

/*
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数：
 * 		obj 要获取样式的元素
 * 		name 要获取的样式名
 */
function getStyle(obj, name) {
  if (window.getComputedStyle) {
    //正常浏览器的方式，具有getComputedStyle()方法
    return getComputedStyle(obj, null)[name];
  } else {
    //IE8的方式，没有getComputedStyle()方法
    return obj.currentStyle[name];
  }
}