import { serializeErgoBox } from "./chainObjects";

describe("Serialize ErgoBox", () => {
  const testVectors = [
    {
      json: {
        boxId: "135baecae94f7ec20caf981800166d450bd1dde4b959e5fdd0e2751b679d94dd",
        transactionId: "ae11d207f0989945f63909d2f703b2640acf4f654a8fdadd23570a640f9d12ee",
        value: "1000000",
        creationHeight: 849741,
        settlementHeight: 849743,
        index: 0,
        ergoTree: "0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63",
        address: "9hY16vzHmmfyVBwKeFGHvb2bMFsG94A1u7To1QWtUokACyFVENQ",
        additionalRegisters: {},
        assets: [
          {
            tokenId: "50fdc80e168c153e472bd7e3dd18a4a0b9e90c550206fdbdb789ee8afdd3b1a9",
            amount: "1"
          }
        ],
        confirmed: true
      },
      bytes:
        "c0843d0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63cdee330150fdc80e168c153e472bd7e3dd18a4a0b9e90c550206fdbdb789ee8afdd3b1a90100ae11d207f0989945f63909d2f703b2640acf4f654a8fdadd23570a640f9d12ee00"
    },
    {
      json: {
        boxId: "6a83a25cc07a1bb7a0c763f94ede470010c8129ddfa248d8ce645ae5d7bb95d4",
        transactionId: "89b758cfed2b9eac6721fb4576d8ba016202fdd939f32425aa7e2aefcbdde32e",
        value: "108181578",
        creationHeight: 843679,
        settlementHeight: 843681,
        index: 1,
        ergoTree: "0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63",
        address: "9hY16vzHmmfyVBwKeFGHvb2bMFsG94A1u7To1QWtUokACyFVENQ",
        additionalRegisters: {},
        assets: [
          {
            tokenId: "de5ee573c6a492c129d51119649bfeaedfc9afa6f54af576e62e1f7f3bbd4207",
            amount: "1581138830"
          },
          {
            tokenId: "1fd6e032e8476c4aa54c18c1a308dce83940e8f4a28f576440513ed7326ad489",
            amount: "1002634"
          },
          {
            tokenId: "03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf04",
            amount: "50"
          },
          {
            tokenId: "74251ce2cb4eb2024a1a155e19ad1d1f58ff8b9e6eb034a3bb1fd58802757d23",
            amount: "200000000000"
          },
          {
            tokenId: "003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d0",
            amount: "1"
          },
          {
            tokenId: "36aba4b4a97b65be491cf9f5ca57b5408b0da8d0194f30ec8330d1e8946161c1",
            amount: "3"
          },
          {
            tokenId: "c5d6629329285b14ed3eac1dba0e07dbd1e61ee332c2039a7a9c04e8be0cb74e",
            amount: "115576961846"
          },
          {
            tokenId: "a3b3fa62124ef52209a46121e3f93ca98d7fc24198009e90fde8205ef9d3fc33",
            amount: "1"
          },
          {
            tokenId: "00bd762484086cf560d3127eb53f0769d76244d9737636b2699d55c56cd470bf",
            amount: "17573"
          },
          {
            tokenId: "5a34d53ca483924b9a6aa0c771f11888881b516a8d1a9cdc535d063fe26d065e",
            amount: "33"
          },
          {
            tokenId: "d601123e8838b95cdaebe24e594276b2a89cd38e98add98405bb5327520ecf6c",
            amount: "15923500"
          },
          {
            tokenId: "bf59773def7e08375a553be4cbd862de85f66e6dd3dccb8f87f53158f9255bf5",
            amount: "1234567890123456789"
          },
          {
            tokenId: "02f31739e2e4937bb9afb552943753d1e3e9cdd1a5e5661949cb0cef93f907ea",
            amount: "216926"
          },
          {
            tokenId: "30974274078845f263b4f21787e33cc99e9ec19a17ad85a5bc6da2cca91c5a2e",
            amount: "379324654791"
          },
          {
            tokenId: "0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b",
            amount: "3708"
          },
          {
            tokenId: "1c51c3a53abfe87e6db9a03c649e8360f255ffc4bd34303d30fc7db23ae551db",
            amount: "540"
          },
          {
            tokenId: "fbbaac7337d051c10fc3da0ccb864f4d32d40027551e1c3ea3ce361f39b91e40",
            amount: "1985"
          },
          {
            tokenId: "ef802b475c06189fdbf844153cdc1d449a5ba87cce13d11bb47b5a539f27f12b",
            amount: "1475493148285"
          },
          {
            tokenId: "472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e8",
            amount: "10000000"
          },
          {
            tokenId: "bf2afb01fde7e373e22f24032434a7b883913bd87a23b62ee8b43eba53c9f6c2",
            amount: "1"
          },
          {
            tokenId: "bf337a2ce726259ad31e043c5b3d432e31b403fc6686691171e0e0a319b9ae7a",
            amount: "1"
          },
          {
            tokenId: "00b1e236b60b95c2c6f8007a9d89bc460fc9e78f98b09faec9449007b40bccf3",
            amount: "589960"
          },
          {
            tokenId: "d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de413",
            amount: "1883"
          },
          {
            tokenId: "ee105e8290b090a773b7c56756507d45a76743d73bce54e8a915e95d9eb97360",
            amount: "316227766"
          }
        ]
      },
      bytes:
        "caf0ca330008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a639fbf3318de5ee573c6a492c129d51119649bfeaedfc9afa6f54af576e62e1f7f3bbd42078e87f9f1051fd6e032e8476c4aa54c18c1a308dce83940e8f4a28f576440513ed7326ad4898a993d03faf2cb329f2e90d6d23b58d91bbb6c046aa143261cc21f52fbe2824bfcbf043274251ce2cb4eb2024a1a155e19ad1d1f58ff8b9e6eb034a3bb1fd58802757d2380a0b787e905003bd19d0187117f130b62e1bcab0939929ff5c7709f843c5c4dd158949285d00136aba4b4a97b65be491cf9f5ca57b5408b0da8d0194f30ec8330d1e8946161c103c5d6629329285b14ed3eac1dba0e07dbd1e61ee332c2039a7a9c04e8be0cb74eb6f6b1c7ae03a3b3fa62124ef52209a46121e3f93ca98d7fc24198009e90fde8205ef9d3fc330100bd762484086cf560d3127eb53f0769d76244d9737636b2699d55c56cd470bfa589015a34d53ca483924b9a6aa0c771f11888881b516a8d1a9cdc535d063fe26d065e21d601123e8838b95cdaebe24e594276b2a89cd38e98add98405bb5327520ecf6cacf2cb07bf59773def7e08375a553be4cbd862de85f66e6dd3dccb8f87f53158f9255bf59582a6efc79e84911102f31739e2e4937bb9afb552943753d1e3e9cdd1a5e5661949cb0cef93f907eade9e0d30974274078845f263b4f21787e33cc99e9ec19a17ad85a5bc6da2cca91c5a2ec7c98b8c850b0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324bfc1c1c51c3a53abfe87e6db9a03c649e8360f255ffc4bd34303d30fc7db23ae551db9c04fbbaac7337d051c10fc3da0ccb864f4d32d40027551e1c3ea3ce361f39b91e40c10fef802b475c06189fdbf844153cdc1d449a5ba87cce13d11bb47b5a539f27f12bfdecfad1f82a472c3d4ecaa08fb7392ff041ee2e6af75f4a558810a74b28600549d5392810e880ade204bf2afb01fde7e373e22f24032434a7b883913bd87a23b62ee8b43eba53c9f6c201bf337a2ce726259ad31e043c5b3d432e31b403fc6686691171e0e0a319b9ae7a0100b1e236b60b95c2c6f8007a9d89bc460fc9e78f98b09faec9449007b40bccf3888124d71693c49a84fbbecd4908c94813b46514b18b67a99952dc1e6e4791556de413db0eee105e8290b090a773b7c56756507d45a76743d73bce54e8a915e95d9eb97360b681e596010089b758cfed2b9eac6721fb4576d8ba016202fdd939f32425aa7e2aefcbdde32e01"
    },
    {
      json: {
        boxId: "69a2f4067392572ed355179f6b7c0e8f74fb8e34503926e6f836531e79ab13f5",
        transactionId: "b66aab1e43874ad8c5583f685a7d6d947238c373f615aee1d04ee604ba2c9340",
        value: "1000000",
        creationHeight: 843402,
        settlementHeight: 843404,
        index: 0,
        ergoTree: "0008cd02200a1c1b8fa17ec82de54bcaef96f23d7b34196c0410f6f578abdbf163b14b25",
        address: "9emAvMvreC9QEGHLV9pupwmteHuJt62qvkH6HnPjUESgQRotfaC",
        additionalRegisters: {},
        assets: [
          {
            tokenId: "0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b",
            amount: "1"
          }
        ]
      },
      bytes:
        "c0843d0008cd02200a1c1b8fa17ec82de54bcaef96f23d7b34196c0410f6f578abdbf163b14b258abd33010cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b0100b66aab1e43874ad8c5583f685a7d6d947238c373f615aee1d04ee604ba2c934000"
    },
    {
      json: {
        boxId: "809b5275a983aa188f376f5b3bffbc9ddaf19739a49f64467b15d47bc5369969",
        transactionId: "8d210ec0a43662a397b1a35cf3091b246927eba1a51bae6696c8a640491eecd6",
        value: "143459798",
        creationHeight: 800000,
        settlementHeight: 850089,
        index: 2,
        ergoTree: "0008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a63",
        address: "9hY16vzHmmfyVBwKeFGHvb2bMFsG94A1u7To1QWtUokACyFVENQ",
        additionalRegisters: {},
        assets: [
          {
            tokenId: "1fd6e032e8476c4aa54c18c1a308dce83940e8f4a28f576440513ed7326ad489",
            amount: "359420"
          }
        ]
      },
      bytes:
        "d68bb4440008cd038d39af8c37583609ff51c6a577efe60684119da2fbd0d75f9c72372886a58a6380ea30011fd6e032e8476c4aa54c18c1a308dce83940e8f4a28f576440513ed7326ad489fcf715008d210ec0a43662a397b1a35cf3091b246927eba1a51bae6696c8a640491eecd602"
    },
    {
      json: {
        boxId: "321a7fffeb3ccde9c694b711e2ea2982ddcc39a97d41151513b07c6276711a51",
        transactionId: "8d210ec0a43662a397b1a35cf3091b246927eba1a51bae6696c8a640491eecd6",
        value: "1000000",
        creationHeight: 800000,
        settlementHeight: 850089,
        index: 0,
        ergoTree: "0008cd0357ab5c00616362607d7d9e7000f35f4451a35dd99228b36a38f1461e4308e484",
        address: "9h8R63vxLW91wfb7yNwVxADh738wPvA4GZB8mSqu8JgcTfhD2cf",
        additionalRegisters: {},
        assets: []
      },
      bytes:
        "c0843d0008cd0357ab5c00616362607d7d9e7000f35f4451a35dd99228b36a38f1461e4308e48480ea3000008d210ec0a43662a397b1a35cf3091b246927eba1a51bae6696c8a640491eecd600"
    },
    {
      json: {
        boxId: "8f281813a88e3016d0e0e7b83c5917931f63b610e4dc9af84ad1adecae50778d",
        transactionId: "f1ab205c16865eeadb8eeade83d3de93fbb6cf203da15a8a485dc449c71b663a",
        value: 14996250000n,
        index: 0,
        creationHeight: 852571,
        ergoTree:
          "1014040004000e208c27dd9d8a35aac1e3167d58858c0a8b4059b277da790552e37eba22df9b903504000400040204020101040205a0c21e040204080500040c040204a0c21e0402050a05c8010402d806d601b2a5730000d602b5db6501fed9010263ed93e4c67202050ec5a7938cb2db63087202730100017302d603b17202d604e4c6b272027303000605d605d90105049590720573047204e4c6b272029972057305000605d606b07202860273067307d901063c400163d803d6088c720601d6098c720801d60a8c72060286029a72097308ededed8c72080293c2b2a5720900d0cde4c6720a040792c1b2a5720900730992da720501997209730ae4c6720a0605ea02d1ededededededed93cbc27201e4c6a7060e927203730b93db63087201db6308a793e4c6720104059db07202730cd9010741639a8c720701e4c68c72070206057e72030593e4c6720105049ae4c6a70504730d92c1720199c1a77e9c9a7203730e730f058c72060292da720501998c72060173109972049d9c720473117312b2ad7202d9010763cde4c672070407e4c6b2a5731300040400",
        address:
          "NTkuk55NdwCXkF1e2nCABxq7bHjtinX3wH13zYPZ6qYT71dCoZBe1gZkh9FAr7GeHo2EpFoibzpNQmoi89atUjKRrhZEYrTapdtXrWU4kq319oY7BEWmtmRU9cMohX69XMuxJjJP5hRM8WQLfFnffbjshhEP3ck9CKVEkFRw1JDYkqVke2JVqoMED5yxLVkScbBUiJJLWq9BSbE1JJmmreNVskmWNxWE6V7ksKPxFMoqh1SVePh3UWAaBgGQRZ7TWf4dTBF5KMVHmRXzmQqEu2Fz2yeSLy23sM3pfqa78VuvoFHnTFXYFFxn3DNttxwq3EU3Zv25SmgrWjLKiZjFcEcqGgH6DJ9FZ1DfucVtTXwyDJutY3ksUBaEStRxoUQyRu4EhDobixL3PUWRcxaRJ8JKA9b64ALErGepRHkAoVmS8DaE6VbroskyMuhkTo7LbrzhTyJbqKurEzoEfhYxus7bMpLTePgKcktgRRyB7MjVxjSpxWzZedvzbjzZaHLZLkWZESk1WtdM25My33wtVLNXiTvficEUbjA23sNd24pv1YQ72nY1aqUHa2",
        assets: [
          {
            tokenId: "011d3364de07e5a26f0c4eef0852cddb387039a921b7154ef3cab22c6eda887f",
            amount: 1n
          }
        ],
        additionalRegisters: {
          R4: "05cab4cd9a03",
          R5: "04bc8968",
          R6: "0e20f7ef73c4a4ab91b84bb0a2905108d534114472ec057be3a57a9dfc9b1fbd85c1"
        }
      },
      bytes:
        "90bbe2ee371014040004000e208c27dd9d8a35aac1e3167d58858c0a8b4059b277da790552e37eba22df9b903504000400040204020101040205a0c21e040204080500040c040204a0c21e0402050a05c8010402d806d601b2a5730000d602b5db6501fed9010263ed93e4c67202050ec5a7938cb2db63087202730100017302d603b17202d604e4c6b272027303000605d605d90105049590720573047204e4c6b272029972057305000605d606b07202860273067307d901063c400163d803d6088c720601d6098c720801d60a8c72060286029a72097308ededed8c72080293c2b2a5720900d0cde4c6720a040792c1b2a5720900730992da720501997209730ae4c6720a0605ea02d1ededededededed93cbc27201e4c6a7060e927203730b93db63087201db6308a793e4c6720104059db07202730cd9010741639a8c720701e4c68c72070206057e72030593e4c6720105049ae4c6a70504730d92c1720199c1a77e9c9a7203730e730f058c72060292da720501998c72060173109972049d9c720473117312b2ad7202d9010763cde4c672070407e4c6b2a5731300040400db843401011d3364de07e5a26f0c4eef0852cddb387039a921b7154ef3cab22c6eda887f010305cab4cd9a0304bc89680e20f7ef73c4a4ab91b84bb0a2905108d534114472ec057be3a57a9dfc9b1fbd85c1f1ab205c16865eeadb8eeade83d3de93fbb6cf203da15a8a485dc449c71b663a00"
    }
  ];

  it("Should serialize", () => {
    for (const tv of testVectors) {
      expect(serializeErgoBox(tv.json).toString("hex")).toBe(tv.bytes);
    }
  });
});
