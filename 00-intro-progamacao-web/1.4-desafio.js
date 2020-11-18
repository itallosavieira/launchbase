const user = {
    name: 'Leticia',
    transactions: [],
    balance: 0
};

function creditTransaction(quantity) {
    return user.balance += quantity;
}

function debitTransaction(quantity) {
    return user.balance -= quantity;
}

function createTransaction(operation, quantity) {
    const transaction = {};
    transaction.type = operation;
    transaction.value = quantity;

    if (operation === 'credit') {
        creditTransaction(quantity);
        user.transactions.push(transaction);
    } else if (operation === 'debit') {
        debitTransaction(quantity);
        user.transactions.push(transaction);
    } else {
        console.log('Operation is not valid.')
        return
    }
}

function getTransactionByType(operation) {
    let valuesOfTransaction = [];

    for (let transaction of user.transactions) {
        if (transaction.type === operation) {
            valuesOfTransaction.push(transaction.value);
        }
    }

    return valuesOfTransaction;
}

function getHigherTransactionByType(operation) {
    const transactions = getTransactionByType(operation);
    return Math.max(...transactions);
}

function getAverageTransactionByType(operation) {
    const transactions = getTransactionByType(operation);
    const reducer = (acc, cur) => acc + cur;

    return transactions.reduce(reducer) / transactions.length;
}

function getTransactionsCount() {
    let count = {};
    count.credit = 0;
    count.debit = 0;

    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            count.credit++;
        } else {
            count.debit++;
        }
    }

    console.log(count);
}


createTransaction('credit', 10);
createTransaction('credit', 15);
createTransaction('debit', 6);
createTransaction('debit', 3);

console.log(getHigherTransactionByType('debit'));
console.log(getHigherTransactionByType('credit'));

console.log(getAverageTransactionByType('debit'));
console.log(getAverageTransactionByType('credit'));

getTransactionsCount();

console.log(user)

