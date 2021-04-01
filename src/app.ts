import express, {Response, Request} from 'express';
const app = express();
app.use(express.json())
app.use(express.urlencoded());


// Routes
// login route
app.post('/login',(_req: Request, res: Response)=>{
  res.status(200).json();
});

// logout route
app.post('/logout', (_req: Request, res: Response)=>{
  console.log('🚀 - logout'); // roberto
  res.status(200).json();
});

// a secret page that can only be accessed when logged in.
app.get('/secret_page', (_req: Request, res: Response)=>{
  console.log('get secrete page')
  res.status(200).json({secret: 'my protected info'})
});


export default app;
