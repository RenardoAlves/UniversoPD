#!/usr/bin/env pwsh
# Fix product share links in produtos HTML files so the shared URL ends with the current file name
# Usage: from repo root run: powershell -ExecutionPolicy Bypass -File .\scripts\fix-social-links.ps1

Set-StrictMode -Version Latest
Write-Host "Scanning 'produtos' for HTML files..."

$produtos = Get-ChildItem -Path .\produtos -Filter *.html -Recurse
foreach ($f in $produtos) {
    $name = $f.Name
    $path = $f.FullName
    $text = Get-Content -Path $path -Raw -ErrorAction Stop

    # Replace any absolute product url that points to a product HTML with the current file name
    $pattern = 'https://universopd.com.br/produtos/[^"\s>]*\.html'
    $replacement = "https://universopd.com.br/produtos/$name"
    $new = [System.Text.RegularExpressions.Regex]::Replace($text, $pattern, $replacement)

    if ($new -ne $text) {
        Set-Content -Path $path -Value $new -Encoding UTF8
        Write-Host "Updated:" $name
    }
}

Write-Host "Done. Reviewed files: $($produtos.Count)"
