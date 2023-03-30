import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: 'fir-demo-51c9c',
      clientEmail: 'firebase-adminsdk-i77c4@fir-demo-51c9c.iam.gserviceaccount.com',
      privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCOqvO6PR79xNcn\nIiaBj9C3s3TRAW4p0//42TpbX4neZN/wbGFJ9t3oZHcWYRzbRboFBSphFsrcbxol\nssBlvw1iRCgkbotgtYvQbmzZb44veH3OETJcyTlbYCBhdZPbzjpGe8DHooWcdOFq\n0thO1s1/fOjmxiqNxUnKaBtpSLT7UyDliah+TZUmT7QOyMcKv1zU6+2wjCbTzRBK\nVY0X6M717gVhVRUcI3HB7lycz3lcmI/Snyjki21cyxp+OC5KcDQuKak2TeM2+zm9\n8h1g2CAhYuaDkUSbl00e00/UOQKDs0fQ5eE+4m4XhelPk02+so4f97CWpPx/5bik\nA/JTqm+dAgMBAAECggEAFH2/Vf+TZPWRxYAlMbS7ULdIzwA6l21otZBVzmvxfGzW\nsUyPyLTZeJh9dkxqfaANMM1mId3JM1IN2l5LPhHr1TJe5aSvBivtMfm6Tpy0OmM/\nBor3xdXtFA/Bdt4RZ5++RQNfVA0mzasH+XThNqmpiGcjeIn78LLmf1jmnv+fZv15\np8BqDXQcNrIZJEvTjDUJblQMVcv/IK+P0CD30rNIvv4pTE+mW2foAWA+TN+38Bss\nuAL7E7d/LCiCu3M1eNa0wPON69pLpJJNkz6Fz8+tQALTqtloU4XqLhAKEmO9siAT\nZRbiTvNvsj+d7gSSq0NlmrRynLdWU3FW19mtWh6K7QKBgQDHngj+LxkG482EmwQM\nTJzlbnYp+PFlbhzWo+Srt4EGnFG/+iwzw7mgAuGzS8dDTln1g2QIkSG7sX2ImEJb\ne2qC5DicjUewZUXj1m8lS6j0Cg8XYNjVgBk1f+KKVkxvxBWNzgtnFE60keRoCtao\nPFWSLZt6kvULaLmOC1z0ceUwDwKBgQC29v/QXF0rRSNbF33qCVEePYsmatHpcGKQ\n2a9aFVcgUq2IbefjyqGWiC//lJZmMrY+oBEh8Esg1JGQYFiFfOlPf/IBOgeZaGDH\nIqlCl4YCPorkAQyaKUZLE75Dlw8HXtSKW8c2GR+23YVu8rLkOokgqLzwqLdyY2nJ\nJXYWSFu5kwKBgQC6xduUOW0pTSyWzpRTDbwfz+MwEoWLaiQBkQf8w44uKUU0Y1fI\nd3HPjeKwaE7hYwY4+d83RNRTUhcrH4u3HRrjrbZqhKZ3HcrvC0yjkM9cx6ynKy63\nVUxBCo9k8KpESSwBqrBwmkeqHHeiAcInV4yZYaMAZVByhGJZzbgD4C2ZcQKBgQCF\nKYvRyAd/QJiU6aoYtaM2UTB/S2tvbP4v0l9PPwzkV4g5LVSCc63bc08LwscbpnkB\nZ1pQyyTCxjMTUyvaK6la1RH7VpLFUjRteoqaDtHXvFE11JWpdbTVW480fjLP+HLU\nKCv68Zola2B7+WO9u+SlwmmQ9hpdxIDvhrZFTXCExQKBgQCD/N/2GJqMxJ13XUNr\n3Hnxp/AlxVD2TIRXQX7rEAXknQ/nR7YI3GUtLHaSx2+GSGL1DeHrSo67mPNDMTLV\nJ5lLUJyF6163eSfR6K45+1TNZ82cYX6vpxQPlwrr5QpKVMPWBBP3Mh5Bw62aCXix\n/xHeL6AhHAM0QdU8l8o5kCM+Dw==\n-----END PRIVATE KEY-----\n",',
    }),
    databaseURL: 'https://fir-demo-51c9c.firebaseio.com/',
  });
  await app.listen(3000);
}
bootstrap();
