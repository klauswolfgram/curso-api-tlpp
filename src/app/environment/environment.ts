let urlAPI: string = `https://protheus:2200/api`
export const environment = {
    urlAPI: urlAPI,
    urlAuth: `${urlAPI}/api/oauth2/v1/token?grant_type=password`,
    urlRefreshToken: `${urlAPI}/api/oauth2/v1/token?grant_type=refresh_token&refresh_token`,
    urlListaClientes: `${urlAPI}/clientes`,
    urlDetalheCliente: `${urlAPI}/cliente`,
    urlDeleteCliente: `${urlAPI}/cliente`,
    urlListaCidades: `${urlAPI}/cidades`,
    urlListaEstados: `${urlAPI}/estados`,
}