import express, {Response, Request} from 'express';




const app = express();
app.use(express.json())
app.use(express.urlencoded());


// Routes
app.post('/login',(_req: Request, res: Response)=>{
  res.status(200).json();
});
app.post('/logout', (_req: Request, res: Response)=>{
  console.log('🚀 - logout'); // roberto
  res.status(200).json();
});
app.get('/secret_page', (_req: Request, res: Response)=>{
  console.log('get secrete page')
  res.status(200).json({secret: 'my protected info'})
});


export default app;
