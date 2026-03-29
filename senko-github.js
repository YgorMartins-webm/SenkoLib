// @ts-nocheck
/**
 * SenkoLib v4.0 Alpha - GitHub Sync Module
 * Substitui o salvamento local pela API do GitHub
 */

const SENKO_GH_CONFIG = {
    TOKEN: 'SEU_TOKEN_AQUI', // Cole seu ghp_... aqui
    OWNER: 'SEU_USUARIO_GITHUB',
    REPO: 'NOME_DO_SEU_REPOSITORIO',
    BRANCH: 'main' // ou 'master'
};

async function saveToGithub(path, content, message = "Update from SenkoLib UI") {
    const url = `https://api.github.com/repos/${SENKO_GH_CONFIG.OWNER}/${SENKO_GH_CONFIG.REPO}/contents/${path}`;
    
    try {
        // 1. Precisamos do SHA (ID da versão atual) do arquivo para poder editar
        const getFile = await fetch(url, {
            headers: { 'Authorization': `token ${SENKO_GH_CONFIG.TOKEN}` }
        });
        
        let sha = "";
        if (getFile.ok) {
            const fileData = await getFile.json();
            sha = fileData.sha;
        }

        // 2. Preparar os dados para o GitHub (o conteúdo precisa ser Base64)
        const body = {
            message: message,
            content: btoa(unescape(encodeURIComponent(content))), // Suporte a caracteres especiais
            branch: SENKO_GH_CONFIG.BRANCH
        };

        if (sha) body.sha = sha; // Se o arquivo já existe, envia o SHA

        // 3. Enviar o novo conteúdo (PUT)
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${SENKO_GH_CONFIG.TOKEN}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            console.log(`✅ Sucesso! Arquivo ${path} sincronizado com o GitHub.`);
            alert("Sincronizado com sucesso no GitHub!");
        } else {
            const error = await response.json();
            console.error("❌ Erro na API:", error);
            alert("Erro ao salvar: " + error.message);
        }
    } catch (err) {
        console.error("❌ Erro de conexão:", err);
    }
}