# express-typescript-boilerplate

## Use Packages
- Express.js
- Sequelize

## Architecture Diagram

Mermaid記法で作成

```mermaid
stateDiagram-v2

    state Architecture {
    
        state PresentationLayer {
             presentationComponent --> businessComponentA
             presentationComponent --> businessComponentB

        }
        
        PresentationLayer --> BusinessLayer
        
        state BusinessLayer {
            businessComponentA --> serviceComponent
            businessComponentB --> serviceComponent

        }
        
        BusinessLayer --> ServiceLayer
        BusinessLayer --> PersistenceLayer

        state ServiceLayer {
            serviceComponent

        }
        
        ServiceLayer --> PersistenceLayer
        
        state PersistenceLayer {
            persistence

        }
        
        PersistenceLayer --> DatabaseLayer
        
        state DatabaseLayer {
            database
        }

    }
```

- PresentationLayer
    - プレゼンテーション層
        - 主に外部インターフェースとの接続部分として使用する。

- BusinessLayer
    - ビジネス層
        - 業務ドメインで使用する処理の単位。（発注、決済、発送、帳票処理などなるべくモジュール化してプレゼンテーション層で再利用できるように設計する）

- ServiceLayer
    - サービス層
        - CRUDの処理を行う。

- PersistenceLayer
    - 永続化層
        - モデルの作成などを担当。

- DatabaseLayer
    - データベース層
        - データベースとの接続を担当。今回はSequelizeというPackageが担当。

## Setup

```
npm ci
```

## Run
```
npm run start
```
