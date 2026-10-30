@echo off
cd /d "%~dp0"
start "FORMA Server" cmd /k node server.js
powershell -NoProfile -Command "$tries=0; do { try { $resp = Invoke-WebRequest -UseBasicParsing http://localhost:3000/login.html -TimeoutSec 2; if ($resp.StatusCode -eq 200) { break } } catch {} ; $tries++; Start-Sleep -Seconds 1 } while ($tries -lt 30); Start-Process http://localhost:3000/login.html"
