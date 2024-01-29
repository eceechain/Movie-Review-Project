"""updated users

Revision ID: 3f30b8c6eda9
Revises: 78430358fcf4
Create Date: 2024-01-29 03:15:08.997237

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f30b8c6eda9'
down_revision = '78430358fcf4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password_hash', sa.String(length=255), nullable=True))
        batch_op.drop_column('password')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('password', sa.VARCHAR(length=255), nullable=True))
        batch_op.drop_column('password_hash')

    # ### end Alembic commands ###
