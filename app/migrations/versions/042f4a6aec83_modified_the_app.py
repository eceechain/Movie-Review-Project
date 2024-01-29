"""Modified the APP

Revision ID: 042f4a6aec83
Revises: 3f30b8c6eda9
Create Date: 2024-01-29 03:51:50.459594

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '042f4a6aec83'
down_revision = '3f30b8c6eda9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password', sa.String(length=255), nullable=True))
        batch_op.drop_column('password_hash')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password_hash', sa.VARCHAR(length=255), nullable=True))
        batch_op.drop_column('password')

    # ### end Alembic commands ###
