import type { ProfileConfig } from '../schema/profile'

// 来来 · 个人 3D 岛屿主页档案（依据公众号《我的经历》真实履历整理）
// 求学 / 家乡地标 / 1~6 段职业履历 映射为主岛 3D 建筑；projects 为「第二秘境」作品展台。
// 想改内容：直接编辑这里，或在站点内点「🛠 建造模式」实时拖拽后「复制 JSON」回填。
export const defaultProfile: ProfileConfig = {
  name: '来来 · AI 绘画教练 / 畅销书作者',
  tagline:
    '21 年设计老兵 · AI 畅销书作者 · 生财有术航海家 · 点击建筑看履历，乘火箭升空前往第二秘境看代表作',
  github: 'https://github.com/6LAILAI',
  linkedin: '',
  biome: 'ocean',
  carrier: 'rocket',
  timeOfDay: 'sunset',
  weather: 'fireflies',
  worldShape: 'archipelago',
  satellites: ['skyline-cbd', 'airfield-harbor', 'lighthouse-reef'],
  decorProps: ['cherry-grove', 'pet-corgi', 'campfire-tent'],
  companyCount: 6,
  places: [
    {
      id: 'university',
      name: '师范院校 · 计算机教育',
      short: '求学',
      kind: 'education',
      style: 'university',
      badgeText: '校园',
      roles: [
        {
          title: '计算机教育 · 大专（2000–2003）',
          location: '陕西 · 安康',
          notes: [
            '大二创办本校计算机协会并任会长，从 I 人锻炼成 E 人；靠勤工俭学租到人生第一台电脑，自学通过计算机三级。',
          ],
        },
        {
          title: '西安美院 · 设计进修',
          location: '西安',
          notes: ['毕业后进修设计，奠定此后 21 年的设计功底。'],
        },
      ],
    },
    {
      id: 'hometown-ankang',
      name: '安康 · 秦巴山区故乡',
      short: '安康',
      kind: 'landmark',
      style: 'mountain-stilts',
      badgeText: '家乡',
      roles: [
        {
          title: '出生与成长（1982–2000）',
          location: '陕西省安康市',
          notes: [
            '生在秦巴山区一个普通家庭，大学前从没离开过省；是小城走出的设计老兵的起点。',
          ],
        },
      ],
    },
    {
      id: 'hometown-guangdong',
      name: '广州 / 清远 · 广东',
      short: '广东',
      kind: 'landmark',
      style: 'metro-landmark',
      badgeText: '现居',
      roles: [
        {
          title: '2010 年至今的事业主场',
          location: '广东省',
          notes: [
            '2010 年南下广州做设计总监、开淘宝店；2013 年定居妻子家乡清远，创办「来来电商」。',
          ],
        },
      ],
    },
    {
      id: 'career-1',
      name: '设计教师 · 8 年讲台',
      short: '1 · 设计教师',
      kind: 'career',
      style: 'studio',
      badgeText: '教师',
      floors: 4,
      roles: [
        {
          title: '计算机 / 设计类教师（2003–2010）',
          location: '初中 · 高中 · 职校 · 大学',
          notes: [
            '8 年讲台生涯，教过平面设计、网页设计、FLASH 动画、影视剪辑、电商设计及三大构成；2008–2010 在北京任大学老师，亲历奥运。',
          ],
        },
      ],
    },
    {
      id: 'career-2',
      name: '淘宝电商创业',
      short: '2 · 淘宝电商',
      kind: 'career',
      style: 'cloud-logistics',
      badgeText: '电商',
      floors: 3,
      roles: [
        {
          title: '设计总监 & 淘宝店主理（2010–2013）',
          location: '广州 · 清远',
          notes: [
            '南下广州任华师附中爱学网、华红兵动漫公司设计总监；2011 年自营文胸类目淘宝店，靠自然流量日销数十至百单。',
          ],
        },
      ],
    },
    {
      id: 'career-3',
      name: '来来电商设计',
      short: '3 · 电商设计',
      kind: 'career',
      style: 'indie-lab',
      badgeText: '公司',
      floors: 5,
      roles: [
        {
          title: '创始人 · 阿里巴巴设计淘拍档（2013–至今）',
          location: '清远',
          notes: [
            '2014 年注册「来来电商」；获阿里巴巴设计淘拍档银奖（广东唯一），详情模板数量全国第一；服务世界 500 强 50+、产出设计稿 5 万+。',
          ],
        },
      ],
    },
    {
      id: 'career-4',
      name: 'web3 / NFT 运营',
      short: '4 · web3',
      kind: 'career',
      style: 'tech',
      badgeText: 'web3',
      floors: 4,
      roles: [
        {
          title: 'web3 运营总监（2018–2023）',
          location: '全球 · 远程',
          notes: [
            '2018 年入局 web3，参与多个项目大使 / 议员；2021 年组建专业 web3 运营团队并任运营总监至 2023 年初。',
          ],
        },
      ],
    },
    {
      id: 'career-5',
      name: 'AI 绘画教练 · 畅销书作者',
      short: '5 · AI 教练',
      kind: 'career',
      style: 'film-stage',
      badgeText: 'AI',
      floors: 6,
      roles: [
        {
          title: 'AI 绘画教练 / 畅销书作者（2022–至今）',
          location: '线上',
          notes: [
            '出版《一本书读懂AI绘画》《一本书读懂AIGC提示词》，累计近万册；第三本《AI视频》在校对审核。',
            '长江商学院特邀讲师；生财有术 AI 绘画航海教练，带 4000+ 学员变现、50+ 全球企业降本增效。',
          ],
        },
      ],
    },
    {
      id: 'career-6',
      name: '生财有术航海家',
      short: '6 · 社区',
      kind: 'career',
      style: 'coffee-roastery',
      badgeText: '社区',
      floors: 3,
      roles: [
        {
          title: '1024 号航海家 · 社区主理（2023–至今）',
          location: '生财有术 · 深海圈',
          notes: [
            '2023 年 3 月加入生财有术，任 4 次 AI 绘画航海教练；2024 年 4 月兑换航海家资格，成为 1024 号航海家。',
          ],
        },
      ],
    },
  ],
  projects: [
    {
      id: 'project-books',
      name: '《一本书读懂AI绘画》《一本书读懂AIGC提示词》',
      tag: '畅销书',
      boothStyle: 'booth-holo',
      summary:
        '两本系统讲解 AI 绘画与 AIGC 提示词的畅销书，累计近万册；第三本《AI视频》在校对审核中。',
    },
    {
      id: 'project-shengcai',
      name: '生财有术 · AI 绘画航海',
      tag: '实战训练营',
      boothStyle: 'booth-crystal',
      summary:
        '21 天 AI 绘画实战营教练，4 次带营、累计带领 4000+ 学员从 0 到 1 变现，单期 600+ 船员。',
    },
    {
      id: 'project-lailai-ec',
      name: '来来电商设计',
      tag: '阿里巴巴淘拍档',
      boothStyle: 'booth-mech',
      repoUrl: 'https://github.com/6LAILAI',
      summary:
        '阿里巴巴设计淘拍档银奖（广东唯一），详情模板数量全国第一；服务世界 500 强 50+、设计稿 5 万+。',
    },
    {
      id: 'project-citygo',
      name: 'CityGo · 城市打卡社交 App',
      tag: 'Y2K 社交',
      boothStyle: 'booth-arcade',
      repoUrl: 'https://github.com/6LAILAI',
      summary:
        '面向年轻人的城市打卡社交 App，Y2K 复古未来风格，霓虹绿 / 电紫 / 亮黄主色体系。',
    },
    {
      id: 'project-hardcandy',
      name: 'HARDCANDY 硬糖设计工作室官网',
      tag: 'Neo-Brutalism',
      boothStyle: 'booth-monolith',
      repoUrl: 'https://github.com/6LAILAI',
      summary:
        'EST.2019 广州的创意设计工作室官网，Neo-Brutalism 新粗野主义风格，像素级可还原 HTML/CSS。',
    },
    {
      id: 'project-aiweb',
      name: '个人作品集 · 博客 / AI趋势 / Linear PM',
      tag: '全栈开发',
      boothStyle: 'booth-holo',
      repoUrl: 'https://github.com/6LAILAI',
      summary:
        '暖阳奶油风个人博客、Linear 工程冷感 AI 趋势网站、React+TS 的 PM 看板与 Resume 生成器等个人项目集合。',
    },
  ],
}
