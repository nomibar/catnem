import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "catnem" is now active!');

	const helloWorldCommand = vscode.commands.registerCommand('catnem.helloWorld', () => {
		vscode.window.showInformationMessage('Hello, from Catnem!');
	});

	const countDiagnosticsCommand = vscode.commands.registerCommand('catnem.countDiagnostics', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const uri = editor.document.uri;
            const diagnostics = vscode.languages.getDiagnostics(uri);

            let errorCount = 0;
            let warningCount = 0;

            diagnostics.forEach(diagnostic => {
                if (diagnostic.severity === vscode.DiagnosticSeverity.Error) {
                    errorCount++;
                } else if (diagnostic.severity === vscode.DiagnosticSeverity.Warning) {
                    warningCount++;
                }
            });

            vscode.window.showInformationMessage(`Errors: ${errorCount}, Warnings: ${warningCount}`);
        } else {
            vscode.window.showInformationMessage('No active editor');	
        }
    });

	
	

	

    const showCatCommand = vscode.commands.registerCommand('catnem.showcat', () => {
		vscode.window.showQuickPick(["cat"]).then((result: string | undefined) => {
			if (result === "cat") {
				// Create the panel first
				const panel = vscode.window.createWebviewPanel(
					'imageView',
					'Image Viewer',
					vscode.ViewColumn.One,
					{ enableScripts: true }
				);
	
				// Then define the image paths
				const imagePath1 = vscode.Uri.file(
					vscode.Uri.joinPath(context.extensionUri, 'src', 'cat1.jpg').fsPath
				);
	
				const imagePath2 = vscode.Uri.file(
					vscode.Uri.joinPath(context.extensionUri, 'src', 'cat2.jpg').fsPath
				);
	
				const imagePath3 = vscode.Uri.file(
					vscode.Uri.joinPath(context.extensionUri, 'src', 'cat3.jpg').fsPath
				);
	
				const imagePath4 = vscode.Uri.file(
					vscode.Uri.joinPath(context.extensionUri, 'src', 'cat4.jpg').fsPath
				);
	
				// Define the interface for image information
				interface ImageInfo {
					uri: string; // This will be the URI of the image as a string
					altText?: string; // Optional: Alternative text for the image
				}
	
				// Function to display an image in the webview panel
				function displayImage(image: ImageInfo) {
					panel.webview.html = `
						<!DOCTYPE html>
						<html lang="en">
						<head>
							<meta charset="UTF-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
							<title>Image Viewer</title>
						</head>
						<body>
							<img src="${image.uri}" alt="${image.altText || 'Image'}" style="width: 100%; height: auto;" />
						</body>
						</html>
					`;
				}
	
				// Create the image URIs and convert them to strings
				const imageUris: ImageInfo[] = [
					{ uri: panel.webview.asWebviewUri(imagePath1).toString(), altText: "Cat 1" },
					{ uri: panel.webview.asWebviewUri(imagePath2).toString(), altText: "Cat 2" },
					{ uri: panel.webview.asWebviewUri(imagePath3).toString(), altText: "Cat 3" },
					{ uri: panel.webview.asWebviewUri(imagePath4).toString(), altText: "Cat 4" }
				];
	
				let currentIndex = 0;
	
				// Function to display the next image in the sequence
				function displayNextImage() {
					const imageInfo = imageUris[currentIndex % imageUris.length];
					displayImage(imageInfo); // Call the function to display the image
	
					currentIndex++; // Increment the index for the next image
					setTimeout(displayNextImage, 2000); // Schedule the next image display
				}
	
				// Start the image display loop
				displayNextImage();
			}
		});
	});
	
	
	// const openSidePanelCommand = vscode.commands.registerCommand('catnem.openSidePanel', () => {
	// 	// Crée un panneau de visualisation dans un onglet latéral (colonne à droite)
	// 	const panel = vscode.window.createWebviewPanel(
	// 		'sidePanel', // Identifiant du type de panneau
	// 		'Panneau Latéral', // Titre du panneau
	// 		vscode.ViewColumn.Beside, // Positionne le panneau dans une colonne à côté
	// 		{ enableScripts: true } // Options (activer les scripts si nécessaire)
	// 	);

	// 	// Contenu HTML à afficher dans le panneau latéral
	// 	panel.webview.html = `
	// 		<!DOCTYPE html>
	// 		<html lang="en">
	// 		<head>
	// 			<meta charset="UTF-8">
	// 			<meta name="viewport" content="width=device-width, initial-scale=1.0">
	// 			<title>Panneau Latéral</title>
	// 		</head>
	// 		<body>
	// 			<h1>Bienvenue dans le panneau latéral</h1>
	// 			<p>Contenu du panneau latéral.</p>
	// 		</body>
	// 		</html>
	// 	`;
	// });

	const nemView = vscode.commands.registerCommand('catnem.nem', () => {

		// Crée le panneau WebView
		const panel = vscode.window.createWebviewPanel(
			'sidePanel', 
			'Panneau Latéral', 
			vscode.ViewColumn.Beside, 
			{ enableScripts: true } 
		);
	
		// Fonction pour mettre à jour le contenu du WebView
		function updatePanel() {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const uri = editor.document.uri;
				const diagnostics = vscode.languages.getDiagnostics(uri);
	
				let errorCount = 0;
				let warningCount = 0;
	
				diagnostics.forEach(diagnostic => {
					if (diagnostic.severity === vscode.DiagnosticSeverity.Error) {
						errorCount++;
					} else if (diagnostic.severity === vscode.DiagnosticSeverity.Warning) {
						warningCount++;
					}
				});
				const severityIndex = errorCount + Math.floor(warningCount / 2);
	
				// Chemins vers les images
				const imagePath1 = vscode.Uri.file(
					vscode.Uri.joinPath(context.extensionUri, 'src', 'cat1.jpg').fsPath
				);
	
				const imagePath2 = vscode.Uri.file(
					vscode.Uri.joinPath(context.extensionUri, 'src', 'cat2.jpg').fsPath
				);
				const imagePath3 = vscode.Uri.file(
					vscode.Uri.joinPath(context.extensionUri, 'src', 'cat3.jpg').fsPath
				);
				
				
				const imagePath4 = vscode.Uri.file(
					vscode.Uri.joinPath(context.extensionUri, 'src', 'cat4.jpg').fsPath
				);
				const imageUri1 = panel.webview.asWebviewUri(imagePath1);
				const imageUri2 = panel.webview.asWebviewUri(imagePath2);
				const imageUri3 = panel.webview.asWebviewUri(imagePath3);
				const imageUri4 = panel.webview.asWebviewUri(imagePath4);
				// Sélection de l'image en fonction de l'indice de gravité
				let imageUri;
				if (severityIndex === 0) {
					imageUri = imageUri1;
				} else if (severityIndex === 1) {
					imageUri = imageUri2;
				} else if (severityIndex > 1 && severityIndex <= 5) {
					imageUri = imageUri3;
				}
				else {
                    imageUri = imageUri4;
                }
	
				// Mise à jour du contenu HTML du WebView
				panel.webview.html = `
					<!DOCTYPE html>
					<html lang="en">
					<head>
						<meta charset="UTF-8">
						<meta name="viewport" content="width=device-width, initial-scale=1.0">
						<title>Panneau Latéral</title>
					</head>
					<body>
						<img src="${imageUri}" alt="Image" style="width: 500px; height: 500px;" />
						<p>Number of errors: ${errorCount}</p>
						<p>Number of warnings: ${warningCount}</p>
						
					</body>
					</html>
				`;
			} else {
				vscode.window.showInformationMessage('No active editors.');
			}
		}
	
		// Mise à jour initiale du panneau
		updatePanel();
	
		// Écouter les changements de diagnostics pour actualiser en temps réel
		const diagnosticChangeListener = vscode.languages.onDidChangeDiagnostics(() => {
			updatePanel();
		});
	
		// Nettoyage des abonnements lors de la fermeture du panneau
		panel.onDidDispose(() => {
			diagnosticChangeListener.dispose();
		});
	});
	
	
	context.subscriptions.push(nemView);
	
    context.subscriptions.push(countDiagnosticsCommand);
    context.subscriptions.push(showCatCommand);
	// context.subscriptions.push(openSidePanelCommand);
	context.subscriptions.push(helloWorldCommand);
}


export function deactivate() {}
// j'voue c'est pas moi qui ai fais les commentaires