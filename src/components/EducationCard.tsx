import Image from 'next/image';
import {} from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';

interface EducationCardProps {
  
}

export default function EducationCard({ }: EducationCardProps) {
    return (
        <Card className="flex">
        <CardHeader>
          <Image width={50} height={50} src={``} alt='Education Image'/>
        </CardHeader>
        <CardContent>
            <h1 className='text-3xl'>Al-Zaeem Al-Sadat Preparatory Evening School for Boys</h1>
        </CardContent>
      </Card>
    )
}
