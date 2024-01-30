import "./Card.css";
import ChartImage from '../Assests/chart-square.jpg'
import Shield from '../Assests/fi-sr-shield-check.jpg'
import Briefcase from '../Assests/briefcase.jpg'
import Video from '../Assests/video.jpg'
import Clock from '../Assests/clock.jpg'

 const Card = () => {
  return (
   
        <div className="card">
            <div className="Card-properties">
                <p className="monica">Monica Geller</p>   
                <div className="icons-text">
                  
                  <div className="icons">
                  <img className="icons-imge" src={ChartImage} alt="chart"/>
                    <p className="text-10">10</p>
                  </div>
                   
                    <div className="icons">
                    <img className="icons-imge" src={Shield} alt="shield"/>
                    <p className="text-800">800</p>
                    </div>
                   
                </div>
            </div>

            <div className="three-https">
            <div className="briefcase-https" >
              <img className="icons-imge" src={Briefcase} alt="briefcase"/>
              <a className="https">https://dribbble.com/shots/22148943-Real-Estate-</a>
            </div>
            <div className="briefcase-https" >
              <img className="icons-imge" src={Video} alt="video"/>
              <a className="https">https://meet.google.com/rcd-sini-tyj</a>
            </div>
            <div className="briefcase-https" >
              <img className="icons-imge" src={Clock} alt="calender"/>
              <p className="text-800">22nd Aug 2023</p>
              <img className="icons-imge" src={Clock} alt="clock"/>
              <p className="text-800">10:00am-10:30am</p>
            </div>
            </div>
            
            <div className="button">
              <button className="connect-button">Connect now</button>
              <button className="decline-button">Decline</button>
            </div>

           
        </div>

        
  );
};

export default Card;





// import Cards from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Box from '@mui/material/Box';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );
// const Card = () => {
//   return (
//     <Cards sx={{ Width: 363 }}>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </Cards>
//   )
// }

// export default Card