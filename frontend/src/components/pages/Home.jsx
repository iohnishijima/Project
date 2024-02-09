import React from 'react'
import Layout from '../providers/Layout';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import {Typography, Card, CardContent, useTheme, useMediaQuery, Link, Grid, CardMedia, Avatar, ListItemText, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const sortSkillsByExperience = (skills) => {
  return skills.sort((a, b) => {
    // 経験年数を抽出するロジック（例: "Experience: 6 year"から6を抽出）
    const experienceA = parseInt(a.detail.match(/\d+/) ? a.detail.match(/\d+/)[0] : 0);
    const experienceB = parseInt(b.detail.match(/\d+/) ? b.detail.match(/\d+/)[0] : 0);

    // 降順でソート
    return experienceB - experienceA;
  });
};

const timelineWorkData = [
  {
    period: "Aug. 2023 - Sep. 2023",
    title: "SeeTrue Technologies (Finalnd)",
    content: "During my internship, I developed software capable of processing, storing, and real-time vi- sualization of data from an eye tracker. Additionally, I also assisted with regular business operations.",
    link: "https://www.seetruetechnologies.com/"
  },
  {
    period: "Jan. 2022 - Jun. 2022",
    title: "SenseTime Japan Ltd. (Japan)",
    content: "- Creation of a Python interface for a face recognition application consisting of a C shared library.\n- Creation of a model evaluation tool for a software library with detection and tracking functions for vehicles, pedestrians, etc., and attribute estimation.\n- Assistance in developing the next version of the above software library.",
    link: "https://www.sensetime.com/en/"
  },
];

const timelineEducationData = [
  {
    period: "Apr. 2022 - Present",
    title: "Master of Science in Imaging and Light in Extended Reality(IMLEX)",
    content: "- University of Eastern Finland (Finland)\n- Toyohashi University of Technology (Japan)\n- Jean Monnet University (France)",
    link: "https://imlex.org/"
  },
  {
    period: "Apr. 2020 - Mar. 2022",
    title: "Toyohashi University of Technology (Japan)",
    content: "Bachelor of Science, Computer Engineering, Technology-Software",
    link: "https://www.tut.ac.jp/english/"
  },
  {
    period: "Apr. 2015 - Mar. 2020",
    title: "Kanazawa Technical College (Japan)",
    content: "Associate's Degree, Mechanical Engineering",
    link: "https://www.ict-kanazawa.ac.jp/guide_en/"
  },
  {
    period: "Apr. 2017 - Mar. 2018",
    title: "Otago Polytechnic (New Zealand)",
    content: "Associate's Degree, Certificate in English and Engineering (Level 4)",
    link: "https://www.op.ac.nz/"
  },
];

const cardListData = [
  {
    title: "Work Experience",
    data: timelineWorkData
  },
  {
    title: "Education",
    data: timelineEducationData
  },
]

const CSskills = [
  { name: "Python", detail: "Experience: 6 year" },
  { name: "C#", detail: "Experience: 2 year" },
  { name: "C++", detail: "Experience: 2 year" },
  { name: "JavaScript", detail: "Experience: 3 year" },
  { name: "React", detail: "Experience: 1 year" },
  { name: "Node.js", detail: "Experience: 1 year" },
  { name: "FastAPI", detail: "Experience: 1 year" },
  { name: "MongoDB", detail: "Experience: 1 year" },
  { name: "Three.js", detail: "Experience: 1 year" },
  { name: "Git", detail: "Experience: 4 year" },
  { name: "AWS", detail: "Experience: 1 year" },
  { name: "ROS", detail: "Experience: 1 year" },
  { name: "Unity", detail: "Experience: 2 year" },
  { name: "HTML/CSS", detail: "Experience: 3 year" },
  { name: "ML/DL", detail: "Experience: 4 year" },
  { name: "AR/VR/XR", detail: "Experience: 2 year" },
];

const Lskills = [
  { name: "Japanese", detail: "level: Native" },
  { name: "English", detail: "level: Proficient" },
  { name: "Chinese", detail: "level: Beginner" },
  { name: "Finnish", detail: "level: Beginner" },
];

const sortedCSskills = sortSkillsByExperience(CSskills);

const skillList = [
  {
    title: "Language",
    data: Lskills
  },
  {
    title: "Skills",
    data: sortedCSskills
  },
]


export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const openInPopup = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    window.open(href);
  };
  return (
    <>
      <Layout title="Home">
        <Card sx={{ mt: 3 }}>
          <CardHeader
            title="About"
            titleTypographyProps={{ align: 'center', variant: 'h4' }}
            sx={{ '.MuiCardHeader-content': { flex: 1, justifyContent: 'center' } }}
          />
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} sm={2}>
              <CardMedia
                component="img"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                image="./photos/other/DSCF3019.webp"
                alt="My Photo"
              />
            </Grid>
            <Grid item xs={12} sm={10}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Ioh Nishijima
                </Typography>
                <Typography variant="body1" paragraph>
                  Hello I'm Ioh Nishijima from Japan. Over the years, I've been focusing on Computer vision and web development. 
                  Currently, I'm enrolled in an IMLEX master's degree program in Finland, Japan, and France. 
                  I'm seeking work environment where people pursue new challenges every day and grow together through teamwork.
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
        {skillList.map((skillItem, skillIndex) => (
          <Card sx={{ minWidth: 275, mt: 3 }} key={skillIndex}>
            <CardContent>
              <Typography sx={{ mb: 1.5, textAlign: "center" }} variant="h4" component="div">
                {skillItem.title}
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {skillItem.data.map((skill, index) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={index}>
                    <Card sx={{ backgroundColor: '#979797' }}>
                      <CardContent sx={{ textAlign: "center" }}>
                        <Typography variant="h6">{skill.name}</Typography>
                        <Typography variant="body2">{skill.detail}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        ))}
        {cardListData.map((cardItem, cardIndex) => (
          <Card sx={{ minWidth: 275, mt: 3 }} key={cardIndex}>
            <CardContent>
              <Typography sx={{ mb: 0.5, textAlign: "center" }} variant="h4" component="div">
                {cardItem.title}
              </Typography>
              <Timeline position={matches ? "alternate" : "right"}>
                {cardItem.data.map((item, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Card sx={{ minWidth: 250, mt: 2, backgroundColor: '#979797' }}>
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {item.period}
                          </Typography>
                          {item.link ? (
                            <Link href={item.link} variant="h6" onClick={openInPopup} style={{ cursor: 'pointer' }}>
                              {item.title}
                            </Link>
                          ) : (
                            <Typography variant="h6">{item.title}</Typography>
                          )}
                          <Typography sx={{ whiteSpace: 'pre-line' }}>{item.content}</Typography>
                        </CardContent>
                      </Card>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </CardContent>
          </Card>
        ))}
      </Layout>
    </>
  )
}
