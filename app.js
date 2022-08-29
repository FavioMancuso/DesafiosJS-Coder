if (window.PaymentRequest){
    const metodopago = [
        {
            supportedMehtods: ['basic-card']
        }
    ];

    const detallePago = [
            {
            total: {
                label: 'Total de su compra:',
                amaount: {
                    currency: 'ARS',
                    value: 1500
                }
            }
        }
    ]

    const paymentRequest = new PaymentRequest(metodopago , detallePago);

    paymentRequest.show();
}
else {
    console.log("API no soportada...");
}