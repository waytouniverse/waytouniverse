import { Star, Mail, Phone, MessageCircle, Award, Briefcase, GraduationCap } from 'lucide-react';
import html2canvas from 'html2canvas'; // 引入 html2canvas

const A4Resume = () => {
  const resumeData = {
    name: "草帽同学",
    title: "AI产品经理",
    contact: {
      email: "736202548@qq.com",
      phone: "136 3128 7579",
      wechat: "buluyeee"
    },
    summary: "富有创新精神的高级软件工程师，专注于云计算和人工智能领域。拥有8年以上的行业经验，曾在多家知名科技公司担任核心开发角色。善于将前沿技术转化为实际的商业解决方案，并在团队中培养创新文化。具备出色的问题解决能力和技术领导力，能够推动大型复杂项目的成功交付。",
    experience: [
      {
        title: "高级云计算工程师",
        company: "云巅科技有限公司",
        period: "2019年8月 - 至今",
        responsibilities: [
          "领导开发团队设计和实现大规模分布式云计算平台，支持每日超过1亿次API调用",
          "优化云资源调度算法，将系统整体性能提���40%，同时降低25%的运营成本",
          "设计微服务架构，提高了系统的可扩展性和可维护性，支持快速迭代和部署"
        ]
      },
      {
        title: "AI算法工程师",
        company: "智能前沿科技公司",
        period: "2016年5月 - 2019年7月",
        responsibilities: [
          "开发和优化机器学习模型，提高了图像识别准确率达到业界领先的98%",
          "设计并实现实时推荐系统，为公司带来30%的额外收入增长",
          "主导NLP项目，开发智能客服系统，将客户响应时间缩短60%"
        ]
      },
      {
        title: "软件开发工程师",
        company: "互联网创新有限公司",
        period: "2014年7月 - 2016年4月",
        responsibilities: [
          "参与开发高并发社交媒体平台，使用React和Node.js技术栈",
          "优化数据库查询性能，将复杂查询响应时间减少80%",
          "实现自动化测试流程，提高代码质量，减少90%的线上bug"
        ]
      }
    ],
    education: [
      {
        degree: "计算机科学与技术硕士",
        school: "北京理工大学（珠海）",
        period: "2024年9月 - 至今"
      },
      {
        degree: "息工程学士",
        school: "北京理工大学珠海学院",
        period: "2011年9月 - 2015年6月"
      }
    ],
    skills: [
      { name: "云计算 (AWS/Azure/GCP)", level: 5 },
      { name: "Python/TensorFlow/PyTorch", level: 5 },
      { name: "Java/Spring Boot", level: 4 },
      { name: "Golang", level: 4 },
      { name: "JavaScript/React/Node.js", level: 5 },
      { name: "分布式系统设计", level: 5 },
      { name: "机器学习/深度学习", level: 4 },
      { name: "DevOps/CI/CD", level: 4 }
    ],
    achievements: [
      "领导团队获得2023年度最佳技术创新奖 🏆",
      "开源项目 'CloudAI' 在GitHub上获得超过15,000 stars ⭐",
      "在ICML国际会议上发表机器学习优化算法论文 📚",
      "获得8项与云计算和AI相关的技术专利 🥇"
    ]
  };

  const downloadPDF = () => {
    const element = document.getElementById('resume') as HTMLElement; // 获取简历的 DOM 元素
    const button = document.getElementById('download-button') as HTMLElement; // 获取下载按钮
    button.style.display = 'none'; // 隐藏下载按钮

    setTimeout(() => { // 延迟截图
      html2canvas(element, { scale: 2 }).then((canvas) => {
        const link = document.createElement('a'); // 创建下载链接
        link.href = canvas.toDataURL('image/png'); // 将画布转换为图片
        link.download = `${resumeData.name}的简历.png`; // 设置下载文件名
        link.click(); // 触发下载
        button.style.display = 'block'; // 重新显示下载按钮
      });
    }, 100); // 100ms 延迟
  };

  return (
    <div className="w-full h-[100%] bg-gradient-to-br from-purple-50 to-indigo-50 font-sans text-xs leading-normal relative overflow-hidden flex rounded-lg shadow-lg" id="resume">
      <div className="w-[220px] bg-gradient-to-b from-purple-100 to-indigo-100 p-4 rounded-l-lg flex flex-col">
        <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-4 rounded-lg shadow mb-4 overflow-hidden">
          <img 
            src="https://p3-passport.byteacctimg.com/img/user-avatar/1ed4c03572b86e8204a57250c12953c4~300x300.image" 
            alt="头像" 
            className="w-16 h-16 mx-auto mb-2 rounded-full shadow overflow-hidden bg-white bg-opacity-30" 
            crossOrigin="anonymous" // 添加跨域属性
          />
          <h1 className="text-xl font-bold text-center mb-1">{resumeData.name}</h1>
          <p className="text-sm text-center mb-2 font-bold">{resumeData.title}</p>
          <div className="text-xs">
            <div className="flex items-center mb-1 font-bold">
              <Mail size={10} className="mr-1 flex-shrink-0" />
              <span className="truncate">{resumeData.contact.email}</span>
            </div>
            <div className="flex items-center mb-1 font-bold">
              <Phone size={10} className="mr-1 flex-shrink-0" />
              <span>{resumeData.contact.phone}</span>
            </div>
            <div className="flex items-center mb-1 font-bold">
              <MessageCircle size={10} className="mr-1 flex-shrink-0" />
              <span>{resumeData.contact.wechat}</span>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-80 p-3 rounded-lg shadow mb-4">
          <h2 className="text-sm font-bold text-purple-600 mb-2 pb-1 border-b border-purple-200 flex items-center">
            <Star size={14} className="mr-1" />
            技能专长
          </h2>
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="flex items-center mb-1">
              <span className="flex-1 text-[10px] text-gray-700 truncate text-left font-bold">
                {skill.name}
              </span>
              <div className="flex ml-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={10}
                    className={`ml-0.5 ${star <= skill.level ? 'text-indigo-500 fill-indigo-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-grow bg-purple-50 p-3 rounded-lg shadow">
          <h2 className="text-sm font-bold text-purple-600 mb-2 pb-1 border-b border-purple-200 flex items-center">
            <Award size={14} className="mr-1" />
            成就与奖项
          </h2>
          {resumeData.achievements.map((achievement, index) => (
            <div key={index} className="flex items-start mb-1 text-[10px] text-gray-700 text-left font-bold">
              <span className="text-sm mr-1">{achievement.slice(-2)}</span>
              <span>{achievement.slice(0, -2)}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4 bg-white bg-opacity-90 rounded-r-lg flex flex-col">
        <div className="bg-purple-50 p-3 rounded-lg shadow mb-4 text-[10px] text-gray-700">
          <h2 className="text-sm font-bold text-purple-600 mb-2 pb-1 border-b border-purple-200 flex items-center">
            <Briefcase size={14} className="mr-1" />
            个人简介
          </h2>
          <p className="text-justify font-bold">{resumeData.summary}</p>
        </div>
        <div className="bg-purple-50 p-3 rounded-lg shadow mb-4">
          <h2 className="text-sm font-bold text-purple-600 mb-2 pb-1 border-b border-purple-200 flex items-center">
            <GraduationCap size={14} className="mr-1" />
            教育背
          </h2>
          {resumeData.education.map((edu, index) => (
            <div key={index} className="mb-2 text-left font-bold">
              <h3 className="text-xs font-bold text-purple-600">{edu.degree} - {edu.school}</h3>
              <p className="text-[10px] text-gray-500">{edu.period}</p>
            </div>
          ))}
        </div>
        <div className="flex-grow bg-purple-50 p-3 rounded-lg shadow">
          <h2 className="text-sm font-bold text-purple-600 mb-2 pb-1 border-b border-purple-200 flex items-center">
            <Briefcase size={14} className="mr-1" />
            工作经历
          </h2>
          {resumeData.experience.map((job, index) => (
            <div key={index} className="mb-3 text-left font-bold">
              <h3 className="text-xs font-bold text-purple-600">{job.title} - {job.company}</h3>
              <p className="text-[10px] text-gray-500 mb-1">{job.period}</p>
              <ul className="list-none pl-0 m-0">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-[10px] text-gray-700 mb-0.5 pl-2 relative">
                    <span className="absolute left-0 top-1.5 w-1 h-1 bg-indigo-500 rounded-full"></span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <button 
          id="download-button" 
          onClick={downloadPDF} // 修改为下载 PDF
          className="absolute left-1/2 bottom-4 transform -translate-x-1/2 p-2 bg-indigo-500 text-white rounded"
      >
          导出简历
      </button>
    </div>
  );
};

export default A4Resume;