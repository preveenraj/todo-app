
## To run server in local

1. npm install
2. npm start

## TODO BACKEND - DEPLOYMENT IN AWS

To deploy in aws instance, follow these steps:

> Reference: https://www.geeksforgeeks.org/deploy-node-express-server-in-aws-ec2-instance/

1. git clone https://github.com/preveenraj/todo-app.git
2. sudo apt-get install curl
3. curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -
4. sudo apt-get install nodejs
5. node -v
6. cd todo-backend
7. npm install
8. npm install pm2 -g
9. pm2 start server.js

## SSL setup

1. Install nginx:
```
sudo apt update
sudo apt install nginx
```

2. Obtain an SSL Certificate: You can use Let's Encrypt to obtain a free SSL certificate. Install Certbot and the Nginx plugin:
```
sudo apt install certbot python3-certbot-nginx
```

3. Obtain an SSL Certificate: Run the following command to obtain an SSL certificate:
```
sudo certbot --nginx -d todo-app.preveenraj.com
```

4. Configure Nginx: Edit your Nginx configuration to proxy requests to your Node.js server:
```
sudo nano /etc/nginx/sites-available/default
```

5. Restart Nginx:
```
sudo systemctl restart nginx
```


