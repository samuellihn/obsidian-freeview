.\scripts\compile.ps1

$Date = Get-Date -Format "MM/dd/yyyy HH:mm"
git add -A
git commit -m "Update $Date"
git push
