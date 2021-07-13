import socket
import sys

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

server_address = ('localhost', 5001)
print('connecting to {} port {}'.format(*server_address))
sock.connect(server_address)

try:

    message = b'01000creapJUAN PEREZ 99499 1234 6'
    # message = b'TEST TEST TEST'
    print(message.decode('utf-8'))
    sock.sendall(message)

    amount_received = 0
    amount_expected = len(message)

    while amount_received < amount_expected:
        data = sock.recv(500)
        amount_received += len(data)
        print('respuesta:'+data.decode('utf-8'))





finally:
    print('closing socket')
    sock.close()