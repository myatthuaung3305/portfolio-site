param(
  [string]$Message = "Update portfolio"
)

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot
$ErrorActionPreference = "Stop"

Write-Host "Building portfolio..."
npm run build

Write-Host "Publishing build output to GitHub Pages files..."
Copy-Item ".\build\index.html" ".\index.html" -Force
Copy-Item ".\build\asset-manifest.json" ".\asset-manifest.json" -Force
Copy-Item ".\build\static\*" ".\static" -Recurse -Force

if (-not (git status --short)) {
  Write-Host "No changes to commit."
  exit 0
}

Write-Host "Committing and pushing to GitHub..."
git add .
git commit -m $Message
git push origin main

Write-Host "Done."
