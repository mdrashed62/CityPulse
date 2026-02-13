import { Box, Card, CardContent, Typography, Grid, Grow } from "@mui/material";
import bgImg from "../assets/transport-Picsart-AiImageEnhancer.jpg";

const cardData = [
  {
    title: "Student Bus",
    from: "Mirpur to Campus (8:00 AM)",
    to: "Campus to Mirpur (3:30 PM)",
    driver: "Mr. Karim",
    phone_number: "01712345678",
  },
  {
    title: "Staff Bus",
    from: "Mirpur to Campus (7:30 AM)",
    to: "Campus to Mirpur (4:00 PM)",
    driver: "Mr. Rahim",
    phone_number: "01823456789",
  },
  {
    title: "Student Bus",
    from: "Depot to Campus (6:45 AM)",
    to: "Campus to Depot (5:00 PM)",
    driver: "Mr. Alam",
    phone_number: "01934567890",
  },
  {
    title: "Staff Bus",
    from: "Hotel to Campus (8:15 AM)",
    to: "Campus to Hotel (3:45 PM)",
    driver: "Mr. Hasan",
    phone_number: "01645678901",
  },
  {
    title: "Staff Bus",
    from: "Hotel to Campus (8:15 AM)",
    to: "Campus to Hotel (3:45 PM)",
    driver: "Mr. Tanvir",
    phone_number: "01556789012",
  },
  {
    title: "Student Bus",
    from: "Depot to Campus (6:45 AM)",
    to: "Campus to Depot (5:00 PM)",
    driver: "Mr. Shakil",
    phone_number: "01467890123",
  },
];

const containerStyle = {
  minHeight: "100vh",
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
};

const gridStyle = { maxWidth: "80%" };

const cardStyle = {
  backdropFilter: "blur(12px)",
  minHeight: "150px",
  WebkitBackdropFilter: "blur(12px)",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  borderRadius: 1,
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 16px 30px rgba(0,0,0,0.3)",
  },
};

export default function Home() {
  return (
    <Box sx={containerStyle}>
      <Grid container spacing={4} sx={gridStyle}>
        {cardData.map((card, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Grow in timeout={500 + index * 300}>
              <Card sx={cardStyle}>
                <CardContent>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "#B3262A" }}
                  >
                    {card.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    {/* Left side: From / To */}
                    <Box sx={{fontSize: '26px'}}>
                      <Typography fontWeight="bold" color="text.secondary">
                        {card.from}
                      </Typography>
                      <Typography fontWeight="bold" color="text.secondary">
                        {card.to}
                      </Typography>
                    </Box>

                    {/* Right side: Driver / Phone */}
                    <Box textAlign="right">
                      <Typography fontWeight="bold">
                        Driver: {card.driver}
                      </Typography>
                      <Typography fontWeight="bold" color="text.secondary">
                        Num: {card.phone_number}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
