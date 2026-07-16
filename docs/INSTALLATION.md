# Neuinstallation

```bash
sudo apt update
sudo apt install -y unzip nginx
cd /var/www
sudo unzip ~/bernds-blog_developer-edition.zip
sudo chown -R $USER:$USER /var/www/bernds-blog
cd /var/www/bernds-blog
npm install
npm run build
```

Danach nginx-Konfiguration prüfen und aktivieren:

```bash
sudo cp nginx/beblog.conf /etc/nginx/sites-available/beblog
sudo ln -s /etc/nginx/sites-available/beblog /etc/nginx/sites-enabled/beblog
sudo nginx -t
sudo systemctl reload nginx
```
