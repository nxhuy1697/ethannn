// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

interface helloProps {
    req: any;
    res: any;
}

export default function handler({req, res} : helloProps) {
    res.status(200).json({ name: 'John Doe' })
  }
  