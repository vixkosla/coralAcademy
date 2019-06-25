var content = {
  items : [
    {
      image: "resourсes/images/information-orientation.jpg",
      name: "Orientation date",
      description: "Tue 10/11 & Wed 10/12: 8am-3pm"
    },
    {
      image: "resourсes/images/information-campus.jpg",
      name: "Our campus",
      description: "Find which campus is close by you"
    },
    {
      image: "resourсes/images/information-guest-lecture.jpg",
      name: "Our guest lecture",
      description: "Join a keynote with Oliver Sack about music in medical treatment"
    }
  ],
  courses : [
    {
      image: 'resourсes/images/course-software.jpg',
      name: 'Software engineering',
      description: 'Web Development, Mobile Develop,emt, iOP, APIs'
    },
    {
      image: 'resourсes/images/course-software.jpg',
      name: 'Computer art',
      description: 'Imaging & Design, Web Design, Motion Graphics & Visual Effects, Computer Animation'
    },
    {
      image: 'resourсes/images/course-computer-art.jpg',
      name: 'Design',
      description: 'User Experience Design, User Research, Visual Design'
    },
    {
      image: 'resourсes/images/course-data.jpg',
      name: 'Data',
      description: 'Data Science, Big Data, SQL, Data Visualization'
    },
    {
      image: 'resourсes/images/course-business.jpg',
      name: 'Business',
      description: 'Product Development, Business Development, Startup'
    },
    {
      image: 'resourсes/images/course-marketing.jpg',
      name: 'Marketing',
      description: 'Analytics, Content Marketing, Mobile Marketing'
    }
  ]
};

var item = document.getElementById('template-item').innerHTML;
var course = document.getElementById('template-course').innerHTML;

var templateItem = Handlebars.compile(item);
var templateCourse = Handlebars.compile(course);

document.getElementById('info-column').innerHTML = templateItem(content);
document.getElementById('courses-table').innerHTML = templateCourse(content);
