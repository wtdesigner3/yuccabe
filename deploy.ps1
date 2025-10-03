# FTP Credentials
$ftpHost = "82.180.140.40"
$ftpUser = "u354789080.yuccabeplanters.com"
$ftpPass = "|qurAUnXzeB|$3Dk"
$ftpPort = "21"

# Create a WebClient object
$webClient = New-Object System.Net.WebClient
$webClient.Credentials = New-Object System.Net.NetworkCredential($ftpUser, $ftpPass)

# Function to upload a file
function Upload-File {
    param (
        [string]$localPath,
        [string]$remotePath
    )
    try {
        $uri = "ftp://${ftpHost}:${ftpPort}/${remotePath}"
        Write-Host "Uploading $localPath to $uri"
        $webClient.UploadFile($uri, $localPath)
        Write-Host "Upload successful!"
    }
    catch {
        Write-Host "Error uploading $localPath : $_"
    }
}

# Get all files recursively, excluding .git and node_modules
$files = Get-ChildItem -Path . -Recurse -File | 
    Where-Object { 
        $_.FullName -notlike "*.git*" -and 
        $_.FullName -notlike "*node_modules*" -and
        $_.FullName -notlike "*.ps1"
    }

# Upload each file
foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($PWD.Path.Length + 1).Replace("\", "/")
    Upload-File -localPath $file.FullName -remotePath $relativePath
}

Write-Host "Deployment complete!"