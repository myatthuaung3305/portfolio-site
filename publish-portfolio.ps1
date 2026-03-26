$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

$ErrorActionPreference = "Stop"

Write-Host "Building portfolio..."
npm run build

Write-Host "Publishing build output to GitHub Pages files..."
Copy-Item ".\build\index.html" ".\index.html" -Force
Copy-Item ".\build\asset-manifest.json" ".\asset-manifest.json" -Force
Copy-Item ".\build\static\*" ".\static" -Recurse -Force

Write-Host "Current git status:"
git status --short

Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Review changes"
Write-Host "2. Run: git add ."
Write-Host "3. Run: git commit -m 'Update portfolio'"
Write-Host "4. Run: git push origin main"
