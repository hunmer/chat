// Once the initialization succeeds:
// Show the ID that allows other user to connect to your session.
peer.on('open', function () {
    document.getElementById("peer-id-label").innerHTML = peer.id;
});

peer.on('connection', function (connection) {
    conn = connection;
    conn.on('data', handleMessage);

    // Hide peer_id field and set the incoming peer id as value

    document.getElementById("peer_id").value = peer_id;
    document.getElementById("connected_peer").innerHTML = connection.metadata.username;
});

peer.on('error', function (err) {
    alert("An error ocurred with peer: " + err);
    console.error(err);
});