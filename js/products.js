const products = [
  {
    seqNo: 'al-01',
    name: '알집',
    ver: 'v12.24',
    desc: '전국민 압축프로그램',
    imgs: {
      icon: 'icon_400_alzip.png',
      feature1: 'img_feature_alzip_1.png',
      feature2: 'img_feature_alzip_2.png',
      feature3: 'img_feature_alzip_3.png',
    },
    bg: {
      feature1: 'rgb(132, 225, 255);',
      feature2: 'rgb(241, 239, 235);',
      feature3: 'rgb(249, 249, 249);',
    },
  },
  {
    seqNo: 'al-02',
    name: '알캡처',
    ver: 'v3.14',
    desc: '쉽고 빠른 화면 캡처',
    imgs: {
      icon: 'icon_400_alcapture.png',
      feature1: 'img_feature_alcapture_1.png',
      feature2: 'img_feature_alcapture_2.png',
      feature3: 'img_feature_alcapture_3.png',
    },
    bg: {
      feature1: 'rgb(52, 174, 255);',
      feature2: 'rgb(255, 255, 255);',
      feature3: 'rgb(200, 235, 255);',
    },
  },
  {
    seqNo: 'al-03',
    name: '알드라이브',
    ver: 'v2.12',
    desc: '편리한 파일 전송 프로그램',
    imgs: {
      icon: 'icon_400_aldrive.png',
      feature1: 'img_feature_aldrive_1.png',
      feature2: 'img_feature_aldrive_2.png',
      feature3: 'img_feature_alzip_3.png',
    },
    bg: {
      feature1: 'rgb(108, 220, 255);',
      feature2: 'rgb(137, 227, 255);',
      feature3: 'rgb(249, 249, 249);',
    },
  },
  {
    seqNo: 'al-04',
    name: '알약',
    ver: 'v2.5.14',
    desc: '전국민 백신 프로그램',
    imgs: {
      icon: 'icon_400_alyac.png',
      feature1: 'img_feature_alyac_1.png',
      feature2: 'img_feature_alyac_2.png',
      feature3: 'img_feature_alyac_3.png',
    },
    bg: {
      feature1: 'rgb(83, 217, 141);',
      feature2: 'rgb(255, 255, 255);',
      feature3: 'rgb(245, 245, 247);',
    },
  },
  {
    seqNo: 'al-05',
    name: '알씨',
    ver: 'v9.31',
    desc: '이미지 뷰어 / 사진 편집 프로그램',
    imgs: {
      icon: 'icon_400_alsee.png',
      feature1: 'img_feature_alsee_1.png',
      feature2: 'img_feature_alsee_2.png',
      feature3: 'img_feature_alsee_3.png',
    },
    bg: {
      feature1: 'rgb(255, 225, 117);',
      feature2: '#FFFFFF;',
      feature3: '#F5F5F7;',
    },
  },
  {
    seqNo: 'al-06',
    name: '알PDF',
    ver: 'v3.12',
    desc: 'PDF 뷰어/리더, PDF 변환/편집',
    imgs: {
      icon: 'icon_400_alpdf.png',
      feature1: 'img_feature_alpdf_1.png',
      feature2: 'img_feature_alpdf_2.png',
      feature3: 'img_feature_alpdf_3.png',
    },
    bg: {
      feature1: 'rgb(247, 245, 245);',
      feature2: '#FFFFFF;',
      feature3: 'rgb(34, 44, 58);',
    },
  },
  {
    seqNo: 'al-07',
    name: '알송',
    ver: 'v3.52',
    desc: '온라인 음악가사 플레이어',
    imgs: {
      icon: 'icon_400_alsong.png',
      feature1: 'img_feature_alsong_1.png',
      feature2: 'img_feature_alsong_2.png',
      feature3: 'img_feature_alzip_3.png',
    },
    bg: {
      feature1: 'rgb(34, 44, 58);',
      feature2: 'linear-gradient(90deg, rgb(255, 89, 168) 0%, rgb(168, 80, 254) 71.81%, rgb(70, 96, 255) 106.88%);',
      feature3: 'rgb(249, 249, 249);',
    },
  },
];

export function getProduct(seqNo) {
  return products.filter((v) => seqNo === v.seqNo);
}