/**
* Describe this function...
* @param {IClientAPI} context
*/
export default function Customers_DeleteConfirmation(context) {
    return context.executeAction('/demoTahaApp/Actions/Customers/Customers_DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return context.executeAction('/demoTahaApp/Actions/Customers/Customers_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}
